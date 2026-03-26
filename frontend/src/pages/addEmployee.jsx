import EmployeeForm from "../components/employeForm";
// import { addEmployee } from "../services/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    console.log("Sending to backend:", data);

    try {
      await axios.post(`http://localhost:5000/api/employees/add`, data);
      navigate("/");
    } catch (err) {
      console.log("API ERROR:", err);
    }
  };

  return <EmployeeForm onSubmit={handleSubmit} />;
};

export default AddEmployee;
