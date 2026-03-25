const sideBar = () => {
  return (
    <div className="h-screen p-5 bg-white border-r w-60">
      <h2 className="mb-6 font-bold text-blue-600">RS-TECH</h2>

      <ul className="space-y-3">
        <li className="p-2 text-white bg-blue-500 rounded hover:cursor-pointer">Employee</li>
        <li className="p-2 text-gray-600 hover:cursor-pointer">Dashboard</li>
        <li className="p-2 text-gray-600 hover:cursor-pointer">Calendar</li>
        <li className="p-2 text-gray-600 hover:cursor-pointer">Messages</li>
      </ul>
    </div>
  );
};

export default sideBar;