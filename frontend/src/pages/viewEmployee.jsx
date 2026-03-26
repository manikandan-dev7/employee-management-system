import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getEmployee } from "../services/api";

const ViewEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    getEmployee(id).then((res) => setData(res.data));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="mb-4 text-lg font-bold">Employee Details</h2>

      <p>Name: {data.name}</p>
      <p>ID: {data.employeeId}</p>
      <p>Department: {data.department}</p>

      <button onClick={() => navigate("/")} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
        Back
      </button>
    </div>
  );
};

export default ViewEmployee;