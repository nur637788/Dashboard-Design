import { Calendar, CheckCircle, Clock, Copy } from "lucide-react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Appointments() {
    return (
        <div className="space-y-6">

            {/* ===== Top Stats ===== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <StatCard
                    title="Total Booked"
                    value="34"
                    subtitle="+8 this week"
                    icon={<Calendar className="text-blue-400" />}
                />

                <StatCard
                    title="AI Booked"
                    value="28"
                    subtitle="82% of total"
                    icon={<CheckCircle className="text-green-400" />}
                />

                <StatCard
                    title="Pending"
                    value="3"
                    subtitle="Awaiting confirmation"
                    icon={<Clock className="text-yellow-400" />}
                />

            </div>

            {/* ===== Booking Link ===== */}
            <div className="bg-[#0B1639] rounded-xl p-5 shadow-glow">
                <p className="text-sm text-white/70 mb-3">Booking Link</p>

                <div className="flex items-center gap-3">
                    <input
                        readOnly
                        value="https://techstore.com/book?id=store123"
                        className="flex-1 bg-[#050B1F] border border-white/10 rounded-lg px-4 py-2 text-sm outline-none"
                    />

                    <button className="flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 transition px-4 py-2 rounded-lg">
                        <Copy size={16} />
                        Copy Link
                    </button>
                </div>
            </div>

            {/* ===== Table ===== */}
            <div className="bg-[#0B1639] rounded-xl shadow-glow overflow-hidden">

                <table className="w-full text-sm">
                    <thead className="bg-white/5 text-white/70">
                        <tr>
                            <Th>Client Name</Th>
                            <Th>Client Phone</Th>
                            <Th>Client Mail</Th>
                            <Th>Device</Th>
                            <Th>Repair Type</Th>
                            <Th>Date</Th>
                            <Th>Slot no</Th>
                            <Th>Start Time</Th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, i) => (
                            <tr
                                key={i}
                                className="border-t border-white/5 hover:bg-white/5 transition"
                            >
                                <Td className="text-blue-400">{item.name}</Td>
                                <Td>{item.phone}</Td>
                                <Td>{item.email}</Td>
                                <Td>{item.device}</Td>
                                <Td>{item.type}</Td>
                                <Td>{item.date}</Td>
                                <Td>{item.slot}</Td>
                                <Td>{item.time}</Td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ===== Pagination ===== */}
            <div className="flex justify-center items-center gap-3 text-sm text-white/60">
                <button className="hover:text-white flex items-center justify-center"><IoIosArrowBack /> Previous</button>
                <button className="px-2 py-1 rounded ">1</button>
                <button className="px-2 py-1 rounded bg-[#A6C8FF] text-black/70">2</button>
                <button className="px-2 py-1 rounded ">3</button>
                <button className="px-2 py-1 rounded ">4</button>
                <span>...</span>
                <button className="px-2 py-1 rounded">11</button>
                <button className="hover:text-white flex items-center justify-center">Next <IoIosArrowForward /></button>
            </div>

        </div>
    );
}

/* ===== Reusable Components ===== */

const StatCard = ({ title, value, subtitle, icon }) => (
    <div className="bg-[#0B1639] rounded-xl p-5 shadow-glow flex justify-between items-center">
        <div>
            <p className="text-sm text-white/60">{title}</p>
            <h2 className="text-2xl font-bold mt-1">{value}</h2>
            <p className="text-xs text-green-400 mt-1">{subtitle}</p>
        </div>
        <div className="p-3 rounded-lg bg-white/5">{icon}</div>
    </div>
);

const Th = ({ children }) => (
    <th className="px-4 py-3 text-left font-medium">{children}</th>
);

const Td = ({ children, className = "" }) => (
    <td className={`px-4 py-3 ${className}`}>{children}</td>
);

/* ===== Dummy Data ===== */

const data = [
    {
        name: "Jane.D",
        phone: "01960685765",
        email: "admin@gmail.com",
        device: "Apple/iPhone 13pro",
        type: "Screen",
        date: "02/06/2026",
        slot: "1",
        time: "09:00",
    },
    {
        name: "Jane.D",
        phone: "01960685765",
        email: "admin@gmail.com",
        device: "Apple/iPhone 13pro",
        type: "Screen",
        date: "02/06/2026",
        slot: "1",
        time: "10:00",
    },
    {
        name: "Jane.D",
        phone: "01960685765",
        email: "admin@gmail.com",
        device: "Apple/iPhone 13pro",
        type: "Screen",
        date: "02/06/2026",
        slot: "1",
        time: "11:00",
    },
    {
        name: "Jane.D",
        phone: "01960685765",
        email: "admin@gmail.com",
        device: "Apple/iPhone 13pro",
        type: "Screen",
        date: "02/06/2026",
        slot: "1",
        time: "12:00",
    },
];
