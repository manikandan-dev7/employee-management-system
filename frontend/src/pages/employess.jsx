import { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/api";
import EmployeeTable from "../components/EmployeeTable";
import ConfirmModal from "../components/confirmModal";
import { useNavigate } from "react-router-dom";

const Employess = () => {
  const [employees, setEmployees] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await getEmployees();
    console.log(res.data, "response data");

    setEmployees(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const confirmDelete = async () => {
    await deleteEmployee(deleteId);
    setDeleteId(null);
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
          Add Employee
        </button>
      </div>

      <EmployeeTable
        employees={employees}
        onDelete={(id) => setDeleteId(id)}
        onView={(id) => navigate(`/view/${id}`)}
        onEdit={(id) => navigate(`/edit/${id}`)}
      />

      {deleteId && (
        <ConfirmModal
          onConfirm={confirmDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}
    </div>
  );
};

export default Employess;
