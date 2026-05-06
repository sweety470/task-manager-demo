import { Task } from "../model/task.js"

export let tasks: Task[] = [];

export const getNextId = (): number => {
  return tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
};