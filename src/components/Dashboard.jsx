import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const [caloriesIn, setCaloriesIn] = useState(1500);
  const [caloriesOut, setCaloriesOut] = useState(1200);
  const [weight, setWeight] = useState(72);
  const [graphData, setGraphData] = useState([
    { day: "Day 1", weight: 72 },
    { day: "Day 2", weight: 71.8 },
    { day: "Day 3", weight: 71.6 },
    { day: "Day 4", weight: 71.9 },
    { day: "Day 5", weight: 71.7 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCaloriesIn((prev) =>
        Math.min(2000, Math.max(1000, prev + Math.floor(Math.random() * 50 - 20)))
      );
      setCaloriesOut((prev) =>
        Math.min(1800, Math.max(800, prev + Math.floor(Math.random() * 40 - 15)))
      );

      setWeight((prev) => {
        let fluctuation = (Math.random() * 0.2 - 0.1).toFixed(1);
        return Math.max(65, Math.min(75, prev + parseFloat(fluctuation)));
      });

      setGraphData((prev) => {
        const newWeight = weight + (Math.random() * 0.3 - 0.15);
        const newData = [...prev.slice(1), { day: `Day ${prev.length + 1}`, weight: newWeight }];
        return newData;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [weight]);

  const inPercent = Math.min(100, (caloriesIn / 2000) * 100);
  const outPercent = Math.min(100, (caloriesOut / 1800) * 100);

  return (
    <section
      id="dashboard"
      className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-orange-200 scroll-mt-10"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition duration-700 pointer-events-none"></div>

      <div className="relative container mx-auto px-6 text-center">
        <h3 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 hover:drop-shadow-lg transition">
          AI Progress Dashboard
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Calories Card */}
          <div className="p-6 bg-white/60 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-300/50 hover:-translate-y-2">
            <h4 className="text-xl font-semibold mb-6 text-blue-700">
              🔥 Calories In vs Out
            </h4>
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 text-sm mb-2 flex justify-between">
                  <span>Calories In</span>
                  <span className="font-medium text-blue-600">
                    {caloriesIn} / 2000 kcal
                  </span>
                </p>
                <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-700"
                    style={{ width: `${inPercent}%` }}
                  />
                </div>
              </div>
              <div>
                <p className="text-gray-700 text-sm mb-2 flex justify-between">
                  <span>Calories Out</span>
                  <span className="font-medium text-red-600">
                    {caloriesOut} / 1800 kcal
                  </span>
                </p>
                <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-red-400 to-red-600 h-4 rounded-full transition-all duration-700"
                    style={{ width: `${outPercent}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Weight Graph Card */}
          <div className="p-6 bg-white/60 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-purple-300/50 hover:-translate-y-2">
            <h4 className="text-xl font-semibold mb-6 text-blue-700">
              ⚖️ Weight Progress
            </h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={graphData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis domain={[65, 75]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="weight"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Current Weight:{" "}
              <span className="font-medium text-green-600">
                {weight.toFixed(1)}kg
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
