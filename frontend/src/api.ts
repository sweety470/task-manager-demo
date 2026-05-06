import axios from "axios";
import type { Task } from "./types";

const API = import.meta.env.VITE_API_URL + "/tasks" || "http://localhost:5000/tasks";;

export const getTasks = () => axios.get<Task[]>(API);

export const createTask = (task: Partial<Task>) => axios.post(API, task);

export const updateTask = (id: number, task: Partial<Task>) =>
  axios.put(`${API}/${id}`, task);

export const deleteTask = (id: number) =>
  axios.delete(`${API}/${id}`);

