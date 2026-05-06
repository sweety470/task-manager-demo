import { Request, Response } from "express";
import * as taskService from "../services/taskService.js";

// GET all
export const getTasks = (req: Request, res: Response) => {
  res.json(taskService.getAllTasks());
};

// GET by ID
export const getTask = (req: Request, res: Response) => {
  const task = taskService.getTaskById(Number(req.params.id));

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
};

// CREATE
export const createTask = (req: Request, res: Response) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = taskService.createTask(title, description);
  res.status(201).json(newTask);
};

// UPDATE
export const updateTask = (req: Request, res: Response) => {
  const updated = taskService.updateTask(
    Number(req.params.id),
    req.body
  );

  if (!updated) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(updated);
};

// DELETE
export const deleteTask = (req: Request, res: Response) => {
  const deleted = taskService.deleteTask(Number(req.params.id));

  if (!deleted) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json({ message: "Task deleted" });
};