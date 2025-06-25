import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const bidsData = [
  { month: "Jan", bids: 100 },
  { month: "Feb", bids: 250 },
  { month: "Mar", bids: 300 },
  { month: "Apr", bids: 250 },
  { month: "May", bids: 400 },
  { month: "Jun", bids: 520 },
  { month: "Jul", bids: 380 },
];

const vendorData = [
  { name: "Open", value: 50 },
  { name: "Closed", value: 30 },
  { name: "Under Review", value: 20 },
];

const COLORS = ["#4f46e5", "#3b82f6", "#38bdf8"];

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
      {/* Bids Over Time */}
      <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200">
        <h3 className="font-semibold text-lg mb-4">Bids Over Time</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={bidsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="bids"
              stroke="#6366f1"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Top Vendors by Participation */}
      <div className="bg-white p-10 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-2 mb-4 ">
          <h3 className="font-semibold text-lg">
            Top Vendors by Participation
          </h3>
          <div className="flex flex-col space-y-1 text-sm">
            <div className="flex items-center">
              <span
                className="inline-block w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: "#4f46e5" }}
              ></span>
              Open
            </div>
            <div className="flex items-center">
              <span
                className="inline-block w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: "#3b82f6" }}
              ></span>
              Closed
            </div>
            <div className="flex items-center">
              <span
                className="inline-block w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: "#38bdf8" }}
              ></span>
              Under Review
            </div>
          </div>
        </div>

        <ResponsiveContainer width={200} height={200}>
          <PieChart>
            <Pie
              data={vendorData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={3}
              dataKey="value"
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            >
              {vendorData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
