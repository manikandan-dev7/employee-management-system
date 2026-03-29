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

      <p>
        <strong>Name:</strong> {data.name}
      </p>
      <p>
        <strong>Employee ID:</strong> {data.employeeId}
      </p>
      <p>
        <strong>Department:</strong> {data.department}
      </p>
      <p>
        <strong>Designation:</strong> {data.designation}
      </p>
      <p>
        <strong>Project:</strong> {data.project}
      </p>
      <p>
        <strong>Type:</strong> {data.type}
      </p>
      <p>
        <strong>Status:</strong> {data.status}
      </p>
      {data.image && (
        <div className="mt-4">
          <strong>Image:</strong>
          <div>
            <img
              src={data.image}
              alt={`${data.name} profile`}
              className="object-cover rounded w-28 h-28"
            />
          </div>
        </div>
      )}

      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
      >
        Back
      </button>
    </div>
  );
};

export default ViewEmployee;
