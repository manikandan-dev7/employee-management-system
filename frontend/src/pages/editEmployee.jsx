import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployee, updateEmployee } from "../services/api";
import EmployeeForm from "../components/employeForm";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    getEmployee(id).then((res) => setData(res.data));
  }, [id]);

  const handleSubmit = async (formData) => {
    await updateEmployee(id, formData);
    navigate("/");
  };

  return data ? (
    <div>
      <h2 className="text-xl font-semibold">Edit Employee</h2>
      <EmployeeForm onSubmit={handleSubmit} initialData={data} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default EditEmployee;