import {
    AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
    { day: "Mon", value: 45 },
    { day: "Tue", value: 60 },
    { day: "Wed", value: 55 },
    { day: "Thu", value: 70 },
    { day: "Fri", value: 85 },
    { day: "Sat", value: 95 },
    { day: "Sun", value: 60 },
];

export default function ChartSection() {
    return (
        <div className="bg-[#0F172B80] p-6 rounded-xl shadow-glow">
            <h3 className="mb-4 text-sm text-white/70">Call Trends - This Week</h3>
            <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={data}>
                    <XAxis dataKey="day" stroke="#aaa" />
                    <YAxis stroke="#aaa" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#3B82F6"
                        fill="url(#color)"
                    />
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.4} />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
