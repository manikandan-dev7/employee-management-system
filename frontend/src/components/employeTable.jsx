const EmployeTable = ({ employees = [], onDelete, onView, onEdit }) => {
  return (
    <div className="bg-white rounded shadow">
      <table className="w-full text-left">
        <thead className="text-sm text-gray-500 border-b">
          <tr>
            <th className="p-2">Name</th>
            <th>ID</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Project</th>
            <th>Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="8" className="py-6 text-center">
                No records found
              </td>
            </tr>
          ) : (
            employees.map((emp) => (
              <tr key={emp.id} className="border-b">
                <td className="p-2">{emp.name}</td>
                <td>{emp.employeeId}</td>
                <td>{emp.department}</td>
                <td>{emp.designation}</td>
                <td>{emp.project}</td>
                <td>{emp.type}</td>
                <td>{emp.status}</td>

                <td className="flex gap-2">
                  <button onClick={() => onView(emp.employeeId)}>👁</button>
                  <button onClick={() => onEdit(emp.employeeId)}>✏</button>
                  <button onClick={() => onDelete(emp.employeeId)}>🗑</button>
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
