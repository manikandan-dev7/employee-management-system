import axios from "axios";

export const API = "http://localhost:5000/api/employees";

export const getEmployees = () => axios.get(API);

export const getEmployee = (id) => axios.get(`${API}/${id}`);

export const updateEmployee = (id, data) => axios.put(`${API}/${id}`, data);

export const deleteEmployee = (id) => axios.delete(`${API}/${id}`);
