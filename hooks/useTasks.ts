import { useEffect, useState } from "react";
import { Task } from "../pages/tasks";

export const useTasks = () => {
  const [tasksArray, setTasksArray] = useState<Task[]>([]);

  async function getOpenTasks() {
    try {
      const response = await fetch("http://localhost:8000/tasks");
      const result = await response.json();
      setTasksArray(result);
    } catch (err) {
      console.error(err);
    }
  }

  const today = new Date();
  useEffect(() => {
    getOpenTasks();
  }, []);

  return {
    tasks: tasksArray,
    today,
  };
};
