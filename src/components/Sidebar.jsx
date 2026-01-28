import { Link, NavLink } from "react-router";
import { Home, Phone, Calendar, Settings, LogOut, } from "lucide-react";

export default function Sidebar() {
    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 px-2 py-2 rounded-lg
     ${isActive
            ? "bg-blue-600/20 text-blue-400 shadow-lg shadow-blue-200"
            : "text-white/70 hover:bg-white/5"}`;

    return (
        <aside className=" min-h-screen bg-[#111B3C] border-r border-white/10 p-2 flex flex-col">
            <Link to='/' className="text-xl font-bold m-3 mb-10 text-blue-500 mx-auto cursor-pointer"><img src="/images/loco.png" alt="" /></Link>

            <nav className="space-y-3 text-sm">
                <NavLink to="/" end className={linkClass}>
                    <Home size={18} /> <span className="hidden md:block ">Dashboard Overview</span>
                </NavLink>

                <NavLink to="/callLog" className={linkClass}>
                    <Phone size={18} /> <span className="hidden md:block">Call Logs</span>
                </NavLink>

                <NavLink to="/appointments" className={linkClass}>
                    <Calendar size={18} /> <span className="hidden md:block">Appointments</span>
                </NavLink>

                <NavLink to="/settings" className={linkClass}>
                    <Settings size={18} /> <span className="hidden md:block">Settings</span>
                </NavLink>
            </nav>

            <div className="mt-auto text-red-400 flex items-center gap-2 cursor-pointer">
                <LogOut size={18} className="text-black" /> <span className="hidden md:block">Log Out</span>
            </div>
        </aside>
    );
}
