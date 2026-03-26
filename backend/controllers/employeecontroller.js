import db from "../dataBase/database.js";

export const getEmployees = (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

export const addEmployee = (req, res) => {
  const {
    name,
    employeeId,
    department,
    designation,
    project,
    type,
    status,
    image,
  } = req.body;

  const sql =
    "INSERT INTO employees (name, employeeId, department, designation, project, type, status, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

  db.query(
    sql,
    [name, employeeId, department, designation, project, type, status, image],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json("Employee added");
    }
  );
};

export const deleteEmployee = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM employees WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json(err);
    res.json("Employee deleted");
  });
};