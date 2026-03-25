import { Link } from "react-router-dom";

const EmployeTable = ({ employees = [], onDelete, onView, onEdit }) => {
  return (
    <div className="bg-white rounded shadow ">
      <table className="w-full text-left border border-gray-500">
        
        {/* Table Head */}
        <thead className="text-sm text-gray-500 border-b ">
          <tr>
            <th className="p-2">Employee Name</th>
            <th>Employee ID</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Project</th>
            <th>Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="8" className="py-6 font-bold text-center text-black">
                No records found
              </td>
            </tr>
          ) : (
            employees.map((emp) => (
              <tr key={emp.id} className="text-sm border-b">
                
                {/* Name + Image */}
                <td className="flex items-center gap-2 py-3">
                  <img
                    src={emp.image || "https://via.placeholder.com/30"}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  {emp.name}
                </td>

                <td>{emp.employeeId}</td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td>{emp.project}</td>
                <td>{emp.type}</td>

                {/* Status Badge */}
                <td>
                  <span className="px-2 py-1 text-xs text-green-600 bg-green-100 rounded">
                    {emp.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="flex gap-2">
                  <button
                    onClick={() => onView(emp.id)}
                    className="text-blue-500"
                  >
                    👁
                  </button>

                  <button
                    onClick={() => onEdit(emp.id)}
                    className="text-yellow-500"
                  >
                    ✏
                  </button>

                  <button
                    onClick={() => onDelete(emp.id)}
                    className="text-red-500"
                  >
                    🗑
                  </button>
                </td>

              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeTable;