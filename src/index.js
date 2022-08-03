import "./styles.css";
import colorLib from "@kurkle/color";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function transparentize(value, opacity) {
  var alpha = opacity === undefined ? 0.5 : 1 - opacity;
  return colorLib(value).alpha(alpha).rgbString();
}

const RED = "rgb(255, 99, 132)";
const BLUE = "rgb(54, 162, 235)";

const labels = ["Jan", "Feb", "March", "April", "May", "June", "July"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 60, 30, 40, 90, 33],
      borderColor: RED,
      backgroundColor: transparentize(RED, 0.5)
    },
    {
      label: "Dataset 2",
      data: [20, 30, 70, 20, 10, 20, 70],
      borderColor: BLUE,
      backgroundColor: transparentize(BLUE, 0.5)
    }
  ]
};

// Chart config
const config = {
  type: "radar",
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Radar Chart"
      }
    }
  }
};

const ctx = document.getElementById("radarChart");

let radarChart = new Chart(ctx, config);
