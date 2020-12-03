<template>
	<v-container>
		<v-row>
			<!-- Start Intervals -->
			<v-col cols="12">
				<v-card class="mx-auto" tile outlined>
					<v-card-title>Choose time interval:</v-card-title>
					<v-card-text>
						<v-row>
							<v-col cols="12" md="6">
								<v-menu
									ref="menu"
									v-model="menu"
									:close-on-content-click="false"
									:return-value.sync="date"
									transition="scale-transition"
									offset-y
									min-width="290px"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-text-field
											v-model="date"
											label="From date"
											prepend-icon="mdi mdi-calendar-month"
											readonly
											v-bind="attrs"
											v-on="on"
										></v-text-field>
									</template>
									<v-date-picker v-model="date" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn text color="primary" @click="menu = false">Cancel</v-btn>
										<v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-col>

							<v-col cols="12" md="6">
								<v-menu
									ref="todateMenu"
									v-model="todateMenu"
									:close-on-content-click="false"
									:return-value.sync="todate"
									transition="scale-transition"
									offset-y
									min-width="290px"
								>
									<template v-slot:activator="{ on, attrs }">
										<v-text-field
											v-model="todate"
											label="To date"
											prepend-icon="mdi mdi-calendar-month"
											readonly
											v-bind="attrs"
											v-on="on"
										></v-text-field>
									</template>
									<v-date-picker v-model="todate" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn text color="primary" @click="todateMenu = false">Cancel</v-btn>
										<v-btn text color="primary" @click="$refs.todateMenu.save(todate)">OK</v-btn>
									</v-date-picker>
								</v-menu>
							</v-col>
						</v-row>
					</v-card-text>
				</v-card>
			</v-col>
			<!-- End Intervals -->

			<!-- Start Users -->
			<v-col cols="12" md="6">
				<v-card>
					<v-row justify="space-around">
						<v-card-title>
							<v-col cols="12">
								<h2>Users at this time:</h2>
							</v-col>
							<v-col cols="12">
								<p>filter with:</p>
								<v-chip-group v-model="users.choose" active-class="primary--text">
									<v-chip v-for="tag in users.filters.tags" :key="tag">{{ tag }}</v-chip>
								</v-chip-group>

								<div v-if="users.choose == 0">
									<v-text-field
										@input="filterUsersTable(0)"
										dense
										v-model="users.filters.age.from"
										label="From Age"
										outlined
									></v-text-field>
									<v-text-field
										@input="filterUsersTable(0)"
										dense
										v-model="users.filters.age.to"
										label="To Age"
										outlined
									></v-text-field>
								</div>

								<v-text-field
									dense
									@input="filterUsersTable(1)"
									v-else-if="users.choose == 1"
									v-model="users.filters.address  "
									label="Area"
									outlined
								></v-text-field>

								<v-autocomplete
									v-model="users.filters.profession"
									:items="users.professions"
									outlined
									v-else-if="users.choose == 2"
									@input="filterUsersTable(2)"
									dense
									:label="$t('inputsPopup.profession')"
								/>
							</v-col>
						</v-card-title>
					</v-row>
					<v-card-text>
						<!-- 	<v-text-field
						v-model="search"
						append-icon="mdi-magnify"
						label="Search"
						single-line
						hide-details
					></v-text-field>
						-->
						<v-data-table :headers="users.headers" :items="users.filterd" :search="search"></v-data-table>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" md="6">
				<v-card class="mx-auto" tile outlined>
					<v-card-title>
						<v-col cols="12">
							<h2>Users at this time:</h2>
						</v-col>
					</v-card-title>
					<v-card-text>
						<PieChart :chartColors="colors" :chartData="users.data" :labels="['blocked', 'new']" />
					</v-card-text>
				</v-card>
			</v-col>
			<!-- End Users -->
		</v-row>

		<v-row>
			<v-col md="6" :key="index" v-for="(chart, index) in invoiceCharts">
				<v-card v-if="chart.chartData">
					<v-card-title class="justify-space-between d-flex">
						<h4>{{ chart.title }}</h4>
					</v-card-title>
					<v-card-text>
						<v-row>
							<v-col cols="12">
								<PieChart
									:chartColors="chart.chartColors"
									:chartData="chart.chartData"
									:labels="chart.chartLabel"
								/>
							</v-col>
						</v-row>
					</v-card-text>
				</v-card>

				<v-sheet v-else color="grey lighten-4" class="px-3 pt-3 pb-3">
					<v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
				</v-sheet>
			</v-col>
		</v-row>
		<!-- End Top 5 charts -->

		<!-- Start Users -->
		<!-- <v-col cols="12">
			<v-card class="mx-auto" tile outlined>
				<v-card-title>Invoices:</v-card-title>
				<v-card-text>
					<v-list-item :key="index" v-for="(block, index) in card">
						<v-list-item-content>
							<v-list-item-title class="d-flex">
								<p>{{ block.title }}:</p>
								<v-spacer />
								<p>{{ block.num }}</p>
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-card-text>
			</v-card>
		</v-col>-->
		<!-- End Users -->
	</v-container>
</template>

<script>
import PieChart from "@/components/charts/PieChart.vue";

export default {
	middleware: "auth",
	layout: "admin",
	components: {
		PieChart
	},
	data(vm) {
		return {
			search: "",
			colors: ["#e74c3c", "#336882"],
			date: new Date().toISOString().substr(0, 10),
			menu: false,
			todate: new Date().toISOString().substr(0, 10),
			todateMenu: false,
			users: {
				professions: ["profession 1", "profession 2", "lol"],
				filters: {
					tags: ["age", "area", "profession"],
					age: {
						from: null,
						to: null
					},
					address: null,
					profession: ""
				},
				choose: 0,
				all: [],
				filterd: [],
				data: [],
				headers: [
					{ text: "name", value: "name" },
					{ text: "Age", value: "age" },
					{ text: "Area", value: "address" },
					{ text: "Industry", value: "profession" }
				]
			},
			invoices: {
				all: [],
				filterd: [],
				amount: 0,
				overdue: [],
				remind: []
			},
			invoiceCharts: [
				{
					//
					title: "All invoices",
					chartColors: ["#336882", "#e74c3c", "#2ecc71", "#000"],
					chartData: [],
					chartLabel: [
						this.$t("invoice.table.filters.invoiceTypes.published"),
						this.$t("invoice.table.filters.invoiceTypes.overdue"),
						this.$t("invoice.table.filters.invoiceTypes.paid"),
						this.$t("invoice.table.filters.invoiceTypes.draft")
					]
				},
				{
					//
					title: "overdue - reminder",
					chartColors: ["#1abc9c", "#e74c3c"],
					chartData: [],
					chartLabel: ["overdue with remind", "overdue without remind"]
				}
			]
		};
	},
	computed: {
		card() {
			return [
				{ title: "There is", num: `${this.invoices.filterd.length} Invoice` },
				{ title: "Amount ex VAT", num: `${this.invoices.amount} kr` },
				{
					title: "overdue without remind",
					num: `${this.invoices.overdue.length}`
				},
				{ title: "overdue with remind", num: `${this.invoices.remind.length}` }
			];
		}
	},
	watch: {
		date(newVal) {
			this.filterUsers(newVal, this.todate);
			this.filterInvoices(newVal, this.todate);
		},
		todate(newVal) {
			this.filterUsers(this.date, newVal);
			this.filterInvoices(this.date, newVal);
		},
		"users.choose"(newVal) {
			this.filterUsersTable(newVal);
			if (newVal == 0) {
				this.users.filters.area = null;
				this.users.filters.profession = null;
			} else if (newVal == 1) {
				this.users.filters.profession = null;
				this.users.filters.age.from = null;
				this.users.filters.age.to = null;
			} else {
				this.users.filters.area = null;
				this.users.filters.age.from = null;
				this.users.filters.age.to = null;
			}
		}
	},
	methods: {
		/**
		 * @param { Date } from
		 * @param { Date } to
		 * @param { Array } data the full date
		 * @param { String } propName the name of the date property
		 * @returns { Array } Filterd array
		 */
		dateRange(from, to, data, propName) {
			let fromDate = new Date(from),
				toDate = new Date(to);

			return data.filter(x => {
				return (
					new Date(x[propName]) <= toDate && new Date(x[propName]) >= fromDate
				);
			});
		},
		filterUsers(from, to, filter) {
			let users = this.users.all;

			this.users.filterd = this.dateRange(from, to, users, "register_date");

			if (filter) {
				if (filter == "age") {
					this.users.filterd = this.users.filterd.filter(x => {
						if (
							this.users.filters.age.to == null &&
							this.users.filters.age.from != null
						) {
							return x.age >= this.users.filters.age.from;
						} else if (
							this.users.filters.age.from == null &&
							this.users.filters.age.to != null
						) {
							return x.age <= this.users.filters.age.to;
						} else {
							return (
								x.age >= this.users.filters.age.from &&
								x.age <= this.users.filters.age.to
							);
						}
					});
				} else {
					this.users.filterd = this.users.filterd.filter(x => {
						console.log(this.users.filters[filter]);

						if (filter == "profession" && !x.profession) x.profession = "";

						var re = new RegExp(this.users.filters[filter], "g");
						return x[filter].match(re);
					});
				}
			} else {
				this.users.data = [
					this.users.filterd.filter(user => !!user.block).length,
					this.users.filterd.length
				];
			}
		},
		filterInvoices(from, to) {
			let invoices = this.invoices.all;

			this.invoices.filterd = this.dateRange(from, to, invoices, "createdate");

			this.assignStatusValuesAndMakeCharts(this.invoices.filterd);

			this.invoices.amount = 0;

			this.invoices.filterd.forEach(inv => {
				// Calc summa
				this.invoices.amount += inv.summa;
				// get overdue and
				if (
					inv.status == this.$t("invoice.table.filters.invoiceTypes.overdue")
				) {
					if (inv.remind) this.invoices.remind.push(inv);
					else this.invoices.overdue.push(inv);
				}
			});
		},
		assignStatusValuesAndMakeCharts(invoices) {
			this.invoiceCharts[0].chartData = [0, 0, 0, 0];
			this.invoiceCharts[1].chartData = [0, 0, 0, 0];

			invoices.forEach(inv => {
				inv.createdate = new Date(inv.createdate)
					.toISOString()
					.substring(0, 10);
				if (
					inv.published &&
					!inv.invoicepaid &&
					new Date(inv.duedate) > Date.now()
				) {
					inv.status = this.$t("invoice.table.filters.invoiceTypes.published");
					this.invoiceCharts[0].chartData[0]++;
				} else if (
					inv.published &&
					!inv.invoicepaid &&
					new Date(inv.duedate) < Date.now()
				) {
					inv.status = this.$t("invoice.table.filters.invoiceTypes.overdue");
					this.invoiceCharts[0].chartData[1]++;
					// remind or not
					if (inv.remind) this.invoiceCharts[1].chartData[0]++;
					else this.invoiceCharts[1].chartData[1]++;

					this.overdueSum += Number(inv.summa);
				} else if (inv.published && inv.invoicepaid) {
					inv.status = this.$t("invoice.table.filters.invoiceTypes.paid");
					this.invoiceCharts[0].chartData[2]++;
				} else if (!inv.published) {
					inv.status = this.$t("invoice.table.filters.invoiceTypes.draft");
					this.invoiceCharts[0].chartData[3]++;
				}
			});
		},
		filterUsersTable(filter) {
			if (!this.users.choose) {
				this.filterUsers(this.date, this.todate);
			}
			if (filter == 0) {
				this.filterUsers(this.date, this.todate, "age");
			} else if (filter == 1) {
				this.filterUsers(this.date, this.todate, "address");
			} else {
				this.filterUsers(this.date, this.todate, "profession");
			}
			console.log(filter);
		}
	},
	async mounted() {
		const promises = [
			this.$axios.$post("/users/admin/", { admin: this.$auth.user.admin }),
			this.$axios.$get("/invoices")
		];
		await Promise.all(promises).then(async res => {
			let users = res[0],
				invoices = res[1];

			this.assignStatusValuesAndMakeCharts(invoices);

			users.forEach(e => {
				e.register_date = new Date(e.register_date)
					.toISOString()
					.substring(0, 10);
				e.age =
					new Date().getFullYear() - String(e.personummer).substr(0, 4) || 0;
			});

			this.users.all = users;
			this.invoices.all = invoices;
		});
	}
};
</script>

