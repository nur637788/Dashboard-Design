import { Outlet } from "react-router";
import Sidebar from "./components/Sidebar";
import Navber from "./components/Navbar";


export default function App() {
  return (
    <div className="min-h-screen bg-[#162456] text-white flex">

      {/* Sidebar */}
      <div className="w-14 md:w-55 fixed left-0 top-0 h-screen">
        <Sidebar />
      </div>

      {/* Right Side */}
      <div className="flex-1 ml-14 md:ml-55 flex flex-col">

        {/* Navbar */}
        <div className="">
          <Navber />
        </div>

        {/* Page Content */}
        <div className="flex-1 p-5 ">
          <Outlet />
        </div>

      </div>
    </div>
  );
}
