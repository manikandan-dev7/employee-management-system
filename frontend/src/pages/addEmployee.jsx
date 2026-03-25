import EmployeeForm from "../components/employeForm";
import { addEmployee } from "../services/api";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      await addEmployee(data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEmployee;
