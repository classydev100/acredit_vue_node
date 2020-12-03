<template>
	<v-layout>
		<v-row>
			<!-- Strart page Header -->
			<v-col cols="12">
				<v-breadcrumbs class="pa-0 ma-0" :items='[$t("invoice.breadCampItems[0]"), { text: $t("invoice.emergency"), disabled: true }]'></v-breadcrumbs>
			</v-col>

			<v-col cols="12" sm="12">
				<div class="d-flex justify-space-between align-center" style="width: 100%">
					<p class="py-0 my-0 black--text headline">{{ $t("invoice.emergency") }}</p>

				</div>
			</v-col>
			<calculations :overdue="overdueSum" />

			<v-col cols="12" sm="12">
				<dateTable :allItems.sync="invoices" :customStates="states"/>
			</v-col>
		</v-row>

		<v-snackbar v-model="snackbar" :color="'error'">
			{{ snackbarText }}
			<v-btn color="black" class="white--text" @click="snackbar = false">{{ $t('cancle') }}</v-btn>
		</v-snackbar>
	</v-layout>
</template>

<script>
import dateTable from "@/components/dataTable.vue";
import calculations from "@/components/calculationSection.vue";

export default {
	middleware: "auth",
	layout: "admin",

	components: {
		dateTable,
		calculations
	},
	data() {
		return {
			snackbar: false,
			snackbarText: null,
      invoices: [],
      states: [
        this.$t("invoice.table.filters.invoiceTypes.published"),
        this.$t("invoice.table.filters.invoiceTypes.paid"),
      ],
			overdueSum: 0,
			breadCampItems: this.$t("invoice.breadCampItems")
		};
	},
	async beforeMount() {
		await this.$axios
			.$get("/invoices")
			.then(res => {
				let ourArr = res.filter(x => x.emergency == true);

				ourArr.forEach(inv => {
					inv.status = this.$t("invoice.table.filters.invoiceTypes.published");

					if (inv.duedate) {
						inv.duedate = new Date(inv.duedate).toISOString().substring(0, 10);
						inv.createdate = new Date(inv.createdate)
							.toISOString()
							.substring(0, 10);
					}
					inv.fromDate = inv.createdate || "-";
					inv.deliveryDate = "-";
				});

				this.invoices = ourArr;
			})
			.catch(err => {
				this.snackbar = true;
				this.snackbarText = "Check your connection";
			});
	}
};
</script>
<style  scoped>
.blueSection {
	display: block;
	width: 100%;
	height: 200px;
	background-color: #dceaf5;
}
.itm {
	display: block;
	width: 100%;
	height: 100%;
	align-items: center;
	margin: auto;
}
th {
	vertical-align: top;
}
</style>
