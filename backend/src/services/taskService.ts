import { tasks, getNextId } from "../data/tasks.js";
import type { Task } from "../model/task.js"

export const getAllTasks = (): Task[] => {
  return tasks;
};

export const getTaskById = (id: number): Task | undefined => {
  return tasks.find(t => t.id === id);
};

export const createTask = (title: string, description: string): Task => {
  const newTask: Task = {
    id: getNextId(),
    title,
    description: description || "",
    completed: false
  };

  tasks.push(newTask);
  return newTask;
};

export const updateTask = (
  id: number,
  data: Partial<Task>
): Task | null => {
  const task = tasks.find(t => t.id === id);
  if (!task) return null;

  if (data.title !== undefined) task.title = data.title;
  if (data.description !== undefined) task.description = data.description;
  if (data.completed !== undefined) task.completed = data.completed;

  return task;
};

export const deleteTask = (id: number): boolean => {
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
};