import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployee } from "../services/api";

const ViewEmployee = () => {
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

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h2>Employee Details</h2>

      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Employee ID:</strong> {data.employeeId}</p>
      <p><strong>Department:</strong> {data.department}</p>
      <p><strong>Designation:</strong> {data.designation}</p>

      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default ViewEmployee;