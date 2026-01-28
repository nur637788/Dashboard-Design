import { Phone, Play, Search } from "lucide-react";
import { MdSlowMotionVideo } from "react-icons/md";

export default function CallLogs() {
    return (
        <div className="space-y-6">
            {/* ===== Main Content ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* ===== Call List ==================== */}
                <div>
                    <div className="flex items-center gap-2 bg-[#0B1639] px-4 py-2 rounded-lg">
                        <Search size={16} className="text-white/50" />
                        <input
                            placeholder="Search by phone number, issue type..."
                            className="bg-transparent outline-none text-sm flex-1"
                        />
                    </div>
                    <div className=" bg-[#0B1639] rounded-xl border border-gray-800 shadow-glow space-y-3 mt-4">
                        <h2 className="text-xl text-white/70 mb-2 p-4">Call List</h2>

                        {calls.map((call, i) => (
                            <div
                                key={i}
                                className=" cursor-pointer p-4 border-t border-b border-gray-800"
                            >
                                <div className="flex justify-between">
                                    <div className="flex gap-3">
                                        <div className="p-2 bg-blue-600/20 rounded-lg">
                                            <Phone size={18} />
                                        </div>
                                        <div>
                                            <p className="text-sm">{call.phone}</p>
                                            <p className="text-xs text-white/50">{call.date}</p>
                                        </div>
                                    </div>

                                    <StatusBadge status={call.status} />
                                </div>

                                <div className="flex items-center gap-3 mt-3 text-xs text-white/60">
                                    <span>{call.duration}</span>
                                    <span>{call.note}</span>
                                    <Tag label={call.tag} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== Call Details ============ */}
                <div>
                    <div className="flex flex-wrap gap-4">
                        <Select label="All Type" />
                        <Select label="All Issues" />
                        <Select label="Today" />
                    </div>
                    <div className=" bg-[#0B1639] rounded-xl shadow-glow p-6 mt-4">
                        <h2 className="text-sm text-white/70 mb-4">Call Details</h2>

                        <div className="grid grid-cols-2 gap-6 text-sm">
                            <Detail label="Phone Number" value="+1 (555) 123-4567" />
                            <Detail label="Duration" value="4:32" />
                            <Detail label="Date & Time" value="2025-12-16 10:45 AM" />
                            <Detail label="Issue Type" value="Screen" />
                            <Detail label="Call Type">
                                <StatusBadge status="AI Resolved" />
                            </Detail>
                            <Detail label="Outcome" value="Quote provided" />
                        </div>

                        {/* ===== Audio ===== */}
                        <button className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600/40 to-blue-600/40 hover:opacity-90 transition py-3 rounded-lg">
                            <MdSlowMotionVideo size={16} /> Play Audio Recording
                        </button>

                        {/* ===== Conversation ===== */}
                        <div className="mt-6 bg-[#050B1F] rounded-xl p-4 text-sm space-y-3 max-h-[300px] overflow-y-auto">
                            <p className="text-green-400 font-medium">AI Assistant</p>
                            <p>Thank you for calling iBreakFix! How can I help you today?</p>

                            <p className="text-blue-400 font-medium">Customer</p>
                            <p>Hi, my iPhone 13 screen is cracked. How much would it cost?</p>

                            <p className="text-green-400 font-medium">AI Assistant</p>
                            <p>
                                Screen repair is $199 including parts, labor and 90-day warranty.
                            </p>

                            <p className="text-blue-400 font-medium">Customer</p>
                            <p>Yes please! When are you available?</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

/* =============== Components ===== */

const Select = ({ label }) => (
    <button className="bg-[#0B1639] px-4 py-2 rounded-lg text-sm text-white/70 hover:text-white">
        {label}
    </button>
);

const StatusBadge = ({ status }) => {
    const map = {
        "AI Resolved": "bg-green-500/20 text-green-400",
        "Warm Transfer": "bg-orange-500/20 text-orange-400",
        Appointment: "bg-blue-500/20 text-blue-400",
        Dropped: "bg-red-500/20 text-red-400",
    };

    return (
        <span className={`text-xs px-4 py-2 rounded-xl ${map[status]}`}>
            {status}
        </span>
    );
};

const Tag = ({ label }) => (
    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">
        {label}
    </span>
);

const Detail = ({ label, value, children }) => (
    <div>
        <p className="text-xs text-white/50 mb-1">{label}</p>
        {value && <p>{value}</p>}
        {children}
    </div>
);

/* =============== Data ===== */

const calls = [
    {
        phone: "+1 (555) 345-6789",
        date: "2025-12-16 • 09:42 AM",
        duration: "5:23",
        note: "Quote Provided",
        tag: "Screen",
        status: "AI Resolved",
    },
    {
        phone: "+1 (555) 345-6789",
        date: "2025-12-16 • 09:42 AM",
        duration: "5:23",
        note: "Escalated to technician",
        tag: "Software",
        status: "Warm Transfer",
    },
    {
        phone: "+1 (555) 345-6789",
        date: "2025-12-16 • 09:42 AM",
        duration: "5:23",
        note: "Appointment Booked",
        tag: "Battery",
        status: "Appointment",
    },
    {
        phone: "+1 (555) 345-6789",
        date: "2025-12-16 • 09:42 AM",
        duration: "0:20",
        note: "Call Dropped",
        tag: "Unknown",
        status: "Dropped",
    },
      {
        phone: "+1 (555) 345-6789",
        date: "2025-12-16 • 09:42 AM",
        duration: "5:23",
        note: "Quote Provided",
        tag: "Screen",
        status: "AI Resolved",
    }
];
