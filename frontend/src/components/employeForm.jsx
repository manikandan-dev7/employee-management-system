import { useState, useEffect } from "react";

const EmployeeForm = ({ onSubmit, initialData }) => {
  const [form, setForm] = useState({
    name: "",
    employeeId: "",
    department: "",
    designation: "",
    project: "",
    type: "",
    status: "",
    image: null,
  });

  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl p-6 bg-white rounded shadow"
    >
      {/* Image Upload */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Upload Image</label>

        {form.image && (
          <img
            src={
              typeof form.image === "string"
                ? form.image
                : URL.createObjectURL(form.image)
            }
            alt="preview"
            className="w-20 h-20 mb-3 rounded"
          />
        )}

        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <input
          name="employeeId"
          type="number"
          placeholder="Employee ID"
          value={form.employeeId}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <input
          name="designation"
          placeholder="Designation"
          value={form.designation}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <input
          name="project"
          placeholder="Project"
          value={form.project}
          onChange={handleChange}
          className="p-2 border rounded"
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">Select Type</option>
          <option value="Office">Office</option>
          <option value="Remote">Remote</option>
        </select>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">Select Status</option>
          <option value="Permanent">Permanent</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-6">
        <button type="button" className="px-4 py-2 border rounded">
          Cancel
        </button>

        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
