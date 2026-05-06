import { useEffect, useState } from "react";
import type { Task } from "./types";
import * as api from "./api";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const fetchTasks = async () => {
    const res = await api.getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async () => {
    if (!title.trim()) return;

    if (editingTask) {
      await api.updateTask(editingTask.id, { title, description });
      setEditingTask(null);
    } else {
      await api.createTask({ title, description });
    }

    setTitle("");
    setDescription("");
    fetchTasks();
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description);
  };

  const handleToggle = async (task: Task) => {
    await api.updateTask(task.id, { completed: !task.completed });
    fetchTasks();
  };

  const handleDelete = async (id: number) => {
    await api.deleteTask(id);
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Task Manager
        </h1>

        {/* Form */}
        <div className="space-y-3 mb-6">
          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="flex gap-3">
            <button
              onClick={handleSubmit}
              className="flex-1 bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
            >
              {editingTask ? "Update Task" : "Add Task"}
            </button>

            {editingTask && (
              <button
                onClick={() => {
                  setEditingTask(null);
                  setTitle("");
                  setDescription("");
                }}
                className="flex-1 bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <h2
                  className={`text-lg font-semibold ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.title}
                </h2>

                <span
                  className={`px-3 py-1 text-sm rounded-full ${
                    task.completed
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {task.completed ? "Done" : "Pending"}
                </span>
              </div>

              <p className="text-gray-600 mt-1">{task.description}</p>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => handleToggle(task)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Toggle
                </button>

                <button
                  onClick={() => handleEdit(task)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;