import { createBrowserRouter } from "react-router";
import App from "./App"
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import CallLogs from "./pages/CallLog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Dashboard /> },
            { path: "appointments", element: <Appointments /> },
            { path: "callLog", element: <CallLogs /> },

        ],
    },
]);
export default router