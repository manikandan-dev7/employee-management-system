import { FaMale, FaClipboard, FaCalendar, FaFacebookMessenger } from "react-icons/fa";

const sideBar = () => {
  return (
    <div className="h-screen p-5 bg-white border-r w-60">
      <h2 className="mb-6 font-bold text-blue-600">RS-TECH</h2>

      <ul className="space-y-3">
        <li className="p-2 text-gray-600 rounded hover:cursor-pointer hover:text-white hover:bg-blue-500"><FaMale />Employee</li>
        <li className="p-2 text-gray-600 rounded hover:cursor-pointer hover:text-white hover:bg-blue-500"><FaClipboard /> Dashboard</li>
        <li className="p-2 text-gray-600 rounded hover:cursor-pointer hover:text-white hover:bg-blue-500"> <FaCalendar /> Calendar</li>
        <li className="p-2 text-gray-600 rounded hover:cursor-pointer hover:text-white hover:bg-blue-500"> <FaFacebookMessenger /> Messages</li>
      </ul>
    </div>
  );
};

export default sideBar;