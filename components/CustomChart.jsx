import { Line } from "react-chartjs-2";
import { getReletivePosition } from "chart.js/helpers";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from "chart.js/auto";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CustomChart = ({labels, datasets, yMax, stepSize}) => {

    const createGradient = (ctx) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400); // Vertical gradient
        gradient.addColorStop(0, "rgba(212, 0, 0, 1)"); // Start color (top)
        gradient.addColorStop(1, "rgba(255, 240, 247, 1)"); // End color (bottom)
        return gradient;
      };

  const data = {
    labels: labels,
    datasets: datasets?.map((i, index) => ({
      label: i.label,
      data: i.data,
      borderColor: i.borderColor,
      backgroundColor: i.backgroundColor,
      pointBackgroundColor: i.backgroundColor,
      tension: 0.4,
      fill: i.fill,
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: { // Single X-axis configuration
          grid: {
            display: false, // Optional: hide vertical grid lines
          },
          ticks: {
            color: "#000", // Optional: Customize text color
          },
        },
        y: { // Single Y-axis configuration
          min: 0,
          max: yMax,
          ticks: {
            stepSize: stepSize,
            color: "#000",
          },
          grid: {
            drawBorder: true,
          },
        },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Performance",
      },
    },
  };

  return (
    <div className="bg-white text-[#333333] shadow-md p-4 rounded-xl w-full h-full mx-auto">
      <Line data={data} options={options} className="" />
    </div>
  );
};

export default CustomChart;
