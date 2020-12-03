<template>
	<v-col cols="12">
		<!-- Start Tables for the invoice
		<table id="basic-table" style="width: 100%; display: none">
			<thead></thead>
			<tbody>
				<tr>
					<td>FAKTURA NR</td>
					<td>Sätts automatiskt</td>
					<td>KUND</td>
					<td>{{ customer.customername }}</td>
				</tr>
				<tr>
					<td>FAKTURADATUM</td>
					<td>{{ invoice.dateFrom }}</td>
					<td>KUNDNR</td>
					<td>{{ customer.kundnummer }}</td>
				</tr>
				<tr>
					<td>RFALLODATUM</td>
					<td>{{ invoice.dateTo }}</td>
					<td>ERT VAT NR</td>
					<td>{{ customer.vatnummer || '' }}</td>
				</tr>
			</tbody>
		</table>
-->
<img style="display: none" id="bankImg" src="@/assets/bank_logo.PNG" alt="banklogo">
		<table id="products-table" style="width: 100%; display: none">
			<thead>
				<tr>
					<td>BESKRIVNING</td>
					<td>MOMS</td>
					<td>ANTAL</td>
					<td>À-PRIS</td>
					<td>SUMMA</td>
				</tr>
			</thead>
			<tbody>
				<tr style="background-color: white" v-for="(prod,index) in draggableItems" :key="index">
					<td>{{ index+1 }}- {{ prod.artikelnamn }}</td>
					<td>{{ prod.moms }}%</td>
					<td>{{ prod.number }} {{ prod.enhet }}</td>
					<td>{{ prod.pris_enhet }} Kr</td>
					<td v-if="!prod.text">{{ prod.total }} Kr</td>
					<td v-else></td>
				</tr>
			</tbody>
		</table>
		<!-- End Tables for the invoice -->

		<!-- Start Done modal -->
		<v-dialog v-model="dialog" max-width="500px">
			<v-card>
				<v-card-title class="headline">
					<h6>{{ $t('newInvoice.deliverySection.doneModal.title') }}</h6>
					<v-spacer />
					<v-icon class="font1" @click="dialog = false">mdi mdi-close</v-icon>
				</v-card-title>
				<v-divider />

				<v-card-text class="pa-5 text-center">{{ $t('newInvoice.deliverySection.doneModal.text') }}</v-card-text>

				<v-card-actions class="grey lighten-3 pa-5">
					<v-spacer />

					<v-btn
						color="success"
						:to="invoiceLink"
					>{{ $t('newInvoice.deliverySection.doneModal.visitBtn') }}</v-btn>

					<v-btn
						color="primary"
						@click="reload"
					>{{ $t('newInvoice.deliverySection.doneModal.createBtn') }}</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<!-- End Done modal -->

		<v-card outlined class="pa-3">
			<v-card-title>
				<h3>{{ $t('newInvoice.deliverySection.title') }}</h3>
			</v-card-title>

			<v-card-text>
				<v-col cols="12" md="12">
					<v-row>
						<v-col cols="12" md="12">
							<v-expansion-panels accordion hover v-model="deliveryMethod">
								<!-- Start Email -->
								<v-expansion-panel>
									<v-expansion-panel-header>
										<v-row no-gutters>
											<v-col cols="12">
												<h3 class="text--primary pb-3">{{ $t('newInvoice.deliverySection.email.title') }}</h3>
											</v-col>
											<v-col cols="12">
												<p
													class="pa-0 ma-0 text--secondary"
												>{{ $t('newInvoice.deliverySection.email.subtitle') }}</p>
											</v-col>
										</v-row>
									</v-expansion-panel-header>

									<v-divider />
									<v-expansion-panel-content class="gray">
										<v-container>
											<v-row>
												<v-col cols="12" md="5">
													<p class="overline">{{ $t('newInvoice.deliverySection.email.cusEmail') }}</p>
													<v-text-field label="Email" v-model="customerEmail" outlined color="#336882" dense />
													<p class="overline">{{ $t('newInvoice.deliverySection.email.options.header') }}</p>
													<v-radio-group v-model="radioGroup">
														<v-radio
															:label="$t('newInvoice.deliverySection.email.options.pdfLink')"
															value="link"
															color="#336882"
														/>
														<v-radio
															:label="$t('newInvoice.deliverySection.email.options.pdfFile')"
															value="attach"
															color="#336882"
														/>
													</v-radio-group>
												</v-col>
											</v-row>
										</v-container>
									</v-expansion-panel-content>
								</v-expansion-panel>
								<!-- End Email -->

								<!-- Start get money -->
								<v-expansion-panel>
									<v-expansion-panel-header>
										<v-row no-gutters>
											<v-col cols="12">
												<h3 class="text--primary pb-3">{{ $t('newInvoice.deliverySection.getMoney.title') }}</h3>
											</v-col>
											<v-col cols="12">
												<p
													class="pa-0 ma-0 text--secondary"
												>{{ $t('newInvoice.deliverySection.getMoney.subtitle') }}</p>
											</v-col>
										</v-row>
									</v-expansion-panel-header>

									<v-divider />
									<v-expansion-panel-content class="gray">
										<v-container>{{ $t('newInvoice.deliverySection.getMoney.text') }}</v-container>
									</v-expansion-panel-content>
								</v-expansion-panel>
								<!-- End Email -->

								<!-- Start PDF Download -->
								<v-expansion-panel>
									<v-expansion-panel-header>
										<v-row no-gutters>
											<v-col cols="12">
												<h3 class="text--primary pb-3">{{ $t('newInvoice.deliverySection.pdf.title') }}</h3>
											</v-col>
											<v-col cols="12">
												<p class="pa-0 ma-0 text--secondary">{{ $t('newInvoice.deliverySection.pdf.subtitle') }}</p>
											</v-col>
										</v-row>
									</v-expansion-panel-header>
									<v-divider />

									<v-expansion-panel-content class="gray pa-5">
										<v-row>
											<v-col cols="12" md="6" class="align-center d-flex text--secondary">
												<div>
													<p>{{ $t('newInvoice.deliverySection.pdf.subtitle') }}</p>
													<v-btn @click="downloedPDF('dsa')">{{ $t('newInvoice.deliverySection.pdf.btnText') }}</v-btn>
												</div>
											</v-col>
											<v-col cols="12" md="6" class="text-center">
												<img width="auto" src="@/assets/invoice_img.png" alt="invoice" />
											</v-col>
										</v-row>
									</v-expansion-panel-content>
								</v-expansion-panel>
								<!-- End PDF Download -->
							</v-expansion-panels>
						</v-col>
						<!-- Start Buttons -->
						<v-col cols="12">
							<v-btn
								class="ma-2"
								:loading="saveInvoiceBtnloading"
								:disabled="draftDisabled"
								color="secondary"
								@click="saveInvoice(true)"
							>{{ $t('newInvoice.deliverySection.actions.draft') }}</v-btn>

							<v-btn
								class="ma-2"
								:loading="saveInvoiceBtnloading"
								:disabled="saveInvoiceBtnDisabled"
								color="primary"
								@click="saveInvoice(false)"
							>{{ publishedText }}</v-btn>
						</v-col>
						<!-- End Buttons -->
					</v-row>
				</v-col>
			</v-card-text>
		</v-card>

		<div class="text-center ma-2">
			<v-snackbar v-model="snackbar" :color="snackbarColor">
				{{ snackbarText }}
				<v-btn color="black" class="white--text" @click="snackbar = false">{{ $t('cancle') }}</v-btn>
			</v-snackbar>
		</div>
	</v-col>
</template>


<script>
import { mapState } from "vuex";
import { v1 as uuidv1 } from "uuid";
import { pdf } from "@/plugins/jspdf.js";

const arr = new Array();
let ocrid = uuidv1(null, arr, -12).join("");

export default {
	data() {
		return {
			snackbar: false,
			snackbarText: "",
			snackbarColor: "error",
			radioGroup: "link",
			dialog: false,
			invoiceLink: null,
			saveInvoiceBtnloading: false,
			pdf_link: "",
			deliveryMethod: null
		};
	},
	props: [
		"draggableItems",
		"calculations",
		"invoiceId",
		"invoiceOcr",
		"userId",
		"extraInfo"
	],
	watch: {
		customerEpost(val) {
			console.log("watching ya 😉", val);
		}
	},

	computed: {
		draftDisabled() {
			if (this.deliveryMethod == 0 || this.deliveryMethod == 1) return true;
		},
		publishedText() {
			if (this.deliveryMethod == 0) return "Send email and publish";
			else if (this.deliveryMethod == 1) return "Publish as emergency";
			else return "Download and publish";
		},
		saveInvoiceBtnDisabled() {
			if (this.deliveryMethod == 0) return false;
			return !!!this.deliveryMethod;
		},
		customerEmail: {
			get: function() {
				return this.customerEpost;
			},
			// setter
			set: function(newValue) {
				console.log(newValue);
				this.$store.commit("setEmail", newValue);
			}
		},
		...mapState(["customerEpost", "customer", "invoice"])
	},
	methods: {
		reload() {
			this.$router.push(`${this.$t("link")}newinvoice`);
		},
		/**
		 * @author Mohammed
		 * @description Uploads the pdf and and set pdf_link.
		 * @returns { PromiseConstructor } with the "doc" instance
		 * @param { Boolean } preview if you wanna save the invoices and download the file or just download it
		 * @param { Number } invID the ocrid
		 */
		async downloedPDF(preview, invId) {
			let location,
				vm = this;

			if (!!preview) {
				pdf(preview, this, ocrid);
			}
			if (!preview) {
				let pdfFile = pdf(preview, this, invId).data,
					doc = pdf(preview, this, invId).doc;

				return new Promise(function(resolve, reject) {
					vm.$axios
						.$post("/profile/file-upload", pdfFile, {
							headers: {
								accept: "application/json",
								"Accept-Language": "en-US,en;q=0.8",
								"Content-Type": `multipart/form-data;`
							}
						})
						.then(response => {
							vm.showSnackbar("success", "PDF uploaded...");

							vm.pdf_link = response["location"];
							console.log(vm.pdf_link);
							resolve(doc);
							doc.save("dsa.pdf");
							return;
							/* if (200 === response.status) {
								// If file size is larger than expected.
								if (response.data.error) {
									if ("LIMIT_FILE_SIZE" === response.data.error.code) {
										alert("Max size: 2MB", "red");
									} else {
										console.log(response.data);
										// If not the given file type
										alert(response.data.error, "red");
									}
								} else {
									// Success
									let fileName = response.data;
									console.log("filedata", fileName);

									alert("File Uploaded", "#3089cf");
								}
							}*/
						})
						.catch(err => {
							reject(err);
						});
				});
			}
		},
		/**
		 * @author Mohammed
		 * @description Saves the invoice
		 * @param { Boolean } draft determine if the user wants to save the invoice or draft it
		 */
		async saveInvoice(draft) {
			let vm = this;
			vm.saveInvoiceBtnloading = true; /** Loading */
			const {
				the_published,
				the_deliveryMethod,
				the_invoce_number,
				the_publishDate,
				the_extra_info,
				the_invoice_obj
			} = vm.createInvoiceObj(draft);

			let published = the_published;
			let deliveryMethod = the_deliveryMethod;
			let invoce_number = the_invoce_number;
			let publishDate = the_publishDate;
			let extra_info = the_extra_info;
			let invoice_obj = the_invoice_obj;

			vm.$axios.setToken(vm.$auth.getToken("local")); /** Set token */

			/** Generate the pdf and get its link */
			vm.showSnackbar("primary", "Generating PDF...");
			vm.downloedPDF(null, invoce_number).then(async doc => {
				if (deliveryMethod == "pdf") {
          doc.save(`${ocrid}.pdf`);
          // doc.output('dataurlnewwindow');

				} else if (deliveryMethod == "emergency") {
					invoice_obj.emergency = true;
				}

				/** If there is an Invoice Edit it */
				if (!!vm.$route.params.id) {
					invoice_obj.pdf_link = vm.pdf_link;
					if (draft == false) {
						invoice_obj.published = true;
					}
					vm.showSnackbar("primary", "Editing the Invoice...");

					await vm.$axios
						.$patch(`/invoices/${vm.$route.params.id}`, invoice_obj)
						.then(async res => {
							console.log(res);

							vm.showSnackbar("success", "Edited...");

							await vm.sendArticles(invoce_number);

							vm.showSnackbar("success", "Redircting...");

							vm.getInvoiceLink(res);
							vm.snackbar = false;
							vm.dialog = true;
						})
						.catch(err => vm.showSnackbar("error", err));
				} else {
					invoice_obj.pdf_link = vm.pdf_link; // Add pdf lunk
					invoice_obj.published = true; // Publish the invoice

					if (deliveryMethod == "e-invoice") {
						invoice_obj.leveransmetod = (vm.radioGroup = "attach")
							? "Link and attached PDF"
							: "Link";
						invoice_obj.mailedto = vm.customerEmail;
					}

					vm.showSnackbar("primary", "Saving Invoice...");

					await vm.$axios
						.$post("/invoices", invoice_obj)
						.then(async res => {
							console.log("new", res);
							console.log("the_deliveryMethod: ", deliveryMethod);
							vm.showSnackbar("primary", "Saving Items...");
							vm.getInvoiceLink(res);

							await vm.sendArticles(invoce_number);
						})
						.catch(err => {
							vm.showSnackbar("error", err);
						});
				}

				if (deliveryMethod == "e-invoice") {
					vm.showSnackbar("primary", "Sending Email...");
					await vm.$axios
						.$post("/mail/sendInvoice", {
							invoiceLink: invoice_obj.pdf_link,
							email: vm.customerEmail,
							attacheInvoice: vm.radioGroup == "attach" ? true : false
						})
						.then(res => {
							vm.showSnackbar("primary", "Getting Invoice link...");

							vm.snackbar = false;
							vm.dialog = true;
						})
						.catch(err => {
							vm.showSnackbar("error", err);
						});
				} else {
					vm.snackbar = false;
					vm.dialog = true;
				}
			});

			vm.saveInvoiceBtnloading = false;
		},
		async sendArticles(invoce_number) {
			let articles = this.draggableItems; /** Get the articles */

			for (let index = 0; index < articles.length; index++) {
				articles[index].invoiceid = invoce_number;

				delete articles[index].__v;
				delete articles[index]._id;
				delete articles[index].id;
				delete articles[index].total;
				delete articles[index].userid;

				console.log(articles[index]);

				await this.$axios
					.$post("/articles", articles[index])
					.then(res => console.log("patched"));
			}
			this.showSnackbar("primary", "Items Saved...");
		},

		createInvoiceObj(draft) {
			console.log("draft", draft);

			let the_published = true; /** Published? */
			if (draft) the_published = false;

			let vm = this,
				the_deliveryMethod =
					vm.deliveryMethod == 0
						? "e-invoice"
						: vm.deliveryMethod == 1
						? "emergency"
						: "pdf",
				the_invoce_number = vm.invoiceOcr || ocrid,
				the_publishDate = !!draft ? null : Date.now(),
				the_emergency = false,
				the_extra_info = !!vm.extraInfo ? vm.extraInfo : null,
				the_invoice_obj = {
					published: the_published,
					invoicepaid: false,
					salarypaid: false,
					_id: vm.invoiceId || null,
					userid: vm.userId || null,
					customername: vm.customer.customername,
					duedate: vm.invoice.dateTo,
					overdueinterest: vm.customer.overdueinterest,
					summa: vm.calculations.amountExVAT,
					total: vm.calculations.totalSumToPay,
					extra_info: the_extra_info,

					pdf_link: vm.pdf_link,
					createdate: vm.invoice.dateFrom,
					customerid: vm.customer._id,
					leveransmetod: null,
					mailedto: null,
					ocrid: the_invoce_number,
					dagar: vm.invoice.dagar,
					emergency: false
					// publishDate: publishDate,
				};

			return {
				the_published,
				the_deliveryMethod,
				the_invoce_number,
				the_publishDate,
				the_extra_info,
				the_invoice_obj
			};
		},
		getInvoiceLink(res) {
			console.log(res);

			if (res.published && res.createdate >= res.duedate)
				this.invoiceLink = `${this.$t("link")}invoices/overdue/${res._id}`;
			else if (res.published && res.createdate < res.duedate)
				this.invoiceLink = `${this.$t("link")}invoices/published/${res._id}`;
			else if (!res.published) {
				this.invoiceLink = `${this.$t("link")}invoices/draft/${res._id}`;
			}
		},
		showSnackbar(color, text) {
			this.snackbar = false;
			this.snackbarColor = color;
			this.snackbar = true;
			this.snackbarText = text;
		}
	}
};
</script>
