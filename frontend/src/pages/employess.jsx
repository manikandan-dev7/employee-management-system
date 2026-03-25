import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/api";
import EmployeeTable from "../components/employeTable";
import { useNavigate } from "react-router-dom";

const Employess = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await getEmployees();
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchData();
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-semibold">Employee</h2>

        <button
          onClick={() => navigate("/add")}
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Add New Employee
        </button>
      </div>

      <EmployeeTable
        employees={employees}
        onDelete={handleDelete}
        onView={(id) => navigate(`/view/${id}`)}
        onEdit={(id) => navigate(`/edit/${id}`)}
      />
    </div>
  );
};

export default Employess;
