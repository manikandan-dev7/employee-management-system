import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployee, updateEmployee } from "../services/api";
import EmployeeForm from "../components/employeForm";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await getEmployee(id);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      await updateEmployee(id, formData);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      {data ? (
        <EmployeeForm onSubmit={handleSubmit} initialData={data} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditEmployee;