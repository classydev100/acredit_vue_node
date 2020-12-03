<template>
	<div class="small">
		<pie-chart :options="options" :chart-data="datacollection"></pie-chart>
	</div>
</template>

<script>
import PieChart from "./PieChart.js";

export default {
	components: {
		PieChart
	},
	props: ["chartData", "chartColors", "labels"],
	data() {
		return {
			datacollection: {},

			options: {
				responsive: true,
				maintainAspectRatio: false
			}
		};
	},
	watch: {
		chartData(val) {
			this.$nextTick(() => {
				this.fillData();
			});
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.fillData();
		});
	},
	methods: {
		fillData() {
			let empty = this.chartData.every(function(value, index) {
				return value === [0, 0, 0, 0][index];
			});

			if (empty) {
				this.datacollection = {
					labels: ['no data'],
					datasets: [
						{
							data: [1],
							backgroundColor: ["#30336b"]
						}
					]
				};
			} else {
				this.datacollection = {
					labels: this.labels,
					datasets: [
						{
							data: this.chartData,
							backgroundColor: this.chartColors
						}
					]
				};
			}
		}
	}
};
</script>

<style>
</style>
