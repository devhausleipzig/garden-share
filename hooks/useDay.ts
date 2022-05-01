import { useEffect, useState } from "react";
import { Booking, Task } from "../utils/types";

export const useDay = (date: number) => {
  const [bookingArray, setBookingArray] = useState<Booking[]>([]);
  const [taskArray, setTaskArray] = useState<Task[]>([]);

  async function getBookings(date: number) {
    try {
      const response = await fetch(
        `http://localhost:8000/bookings?date=${new Date(date).toISOString()}`
      );
      const result = await response.json();
      setBookingArray(result);
    } catch (err) {
      console.log(err);
    }
  }

  async function getTasks() {
    try {
      const response = await fetch(
        `http://localhost:8000/tasks?available=true`
      );
      const result = await response.json();
      console.log(result);
      setTaskArray(result);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getBookings(date);
    getTasks();
  }, []);
  return { bookings: bookingArray, tasks: taskArray };
};
