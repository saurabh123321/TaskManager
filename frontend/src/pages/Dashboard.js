import { useState } from "react";
import { Bar } from "react-chartjs-2";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";


// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const Dashboard = () => {
  const [data, setData] = useState({
    totalTasks: 9,
    completedTasks: 1,
    inProgress: 3,
    todos: 5,
    priorities: [2400, 2000, 2200],
  });

  const chartData = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        label: "Total Tasks",
        data: data.priorities,
        backgroundColor: "#6366F1",
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-4 gap-4">
          <DashboardCard title="TOTAL TASKS" count={data.totalTasks} />
          <DashboardCard title="COMPLETED" count={data.completedTasks} />
          <DashboardCard title="IN PROGRESS" count={data.inProgress} />
          <DashboardCard title="TO-DOs" count={data.todos} />
        </div>
        {/* Chart */}
        <div className="mt-6 bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Chart by Priority</h2>
          <Bar data={chartData} />
        </div>
      </main>
    </div>
  );
};

const DashboardCard = ({ title, count }) => (
  <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center">
    <h3 className="text-sm text-gray-500">{title}</h3>
    <p className="text-2xl font-bold">{count    }</p>
  </div>
);

export default Dashboard;
