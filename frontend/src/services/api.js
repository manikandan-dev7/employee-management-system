import axios from "axios";

const API = "http://localhost:5000";

export const getEmployees = () => axios.get(`${API}/employees`);

export const getEmployee = (id) =>
  axios.get(`${API}/employees/${id}`);

export const addEmployee = (data) =>
  axios.post(`${API}/employees`, data);

export const updateEmployee = (id, data) =>
  axios.put(`${API}/employees/${id}`, data);

export const deleteEmployee = (id) =>
  axios.delete(`${API}/employees/${id}`);