<template>
  <Bar
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: "BarChart",
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 100,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
    chartData: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    console.log(this.width);
  },
  data() {
    return {
      // chartData: {
      //   labels: [
      //     "Jan",
      //     "Feb",
      //     "Mar",
      //     "Apr",
      //     "May",
      //     "Jun",
      //     "Jul",
      //     "Aug",
      //     "Sep",
      //     "Oct",
      //     "Nov",
      //     "Dec",
      //   ],
      //   datasets: [{ data: [40, 20, 12, 30, 50, 20, 45, 30, 40, 60, 80, 55] }, { data: [40, 20, 12, 30, 50, 20, 45, 30, 40, 60, 80, 55] }],
      // },
      chartOptions: {
        responsive: true,
        animation: {
          duration: 2,
        },
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    };
  },
};
</script>
