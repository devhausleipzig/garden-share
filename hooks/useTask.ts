import { useEffect, useState } from "react";
import { Task } from "../utils/types";

export const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  async function getTasks() {
    try {
      const response = await fetch(`http://localhost:8000/task?available=true`);
      const result = await response.json();
      console.log(result);
      setTasks(result);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTasks();
  }, []);
  return tasks;
};
