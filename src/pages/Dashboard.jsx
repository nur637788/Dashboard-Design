import { Phone, Calendar, Clock, AlertCircle } from "lucide-react";

import ChartSection from "../components/ChartSection";
import StatCard from "../components/StatCard";

export default function Dashboard() {
    return (
        <main className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <StatCard title="Total Calls Today" value="127" percent="+12%" icon={<Phone className="px-2 rounded-md bg-gradient-to-br from-[#2B7FFF] to-[#00B8DB] "/>} color="blue" />
                <StatCard title="AI Handled Calls" value="98" percent="+77%" icon={<Phone className="px-2 rounded-md bg-gradient-to-br from-[#AD46FF] to-[#F6339A] "/>} color="purple" />
                <StatCard title="Warm Transfer" value="23" percent="+18%" icon={<Phone className="px-2 rounded-md bg-gradient-to-br from-[#FF6900] to-[#FB2C36] "/>} color="orange" />
                <StatCard title="Appointments Booked" value="34" percent="+8%" icon={<Calendar className="px-2 rounded-md bg-gradient-to-br from-[#00C950] to-[#00BC7D] " />} color="green" />
                <StatCard title="Missed Calls" value="6" percent="-3%" icon={<AlertCircle className="px-2 rounded-md bg-gradient-to-br from-[#FB2C36] to-[#FF2056] "/>} color="red" />
                <StatCard title="Avg Call Duration" value="3:42" percent="+15%" icon={<Clock className="px-2 rounded-md bg-gradient-to-br from-[#615FFF] to-[#2B7FFF] "/>} color="indigo" />
            </div>

            <ChartSection />
        </main>
    );
}
