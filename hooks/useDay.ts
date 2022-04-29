import { useEffect, useState } from "react";

export const useDay = (date: Date) => {
  const [bookingArray, setBookingArray] = useState<[]>([]);
  const [taskArray, setTaskArray] = useState<[]>([]);

  async function getBookings(date: Date) {
    try {
      const response = await fetch(
        `http://localhost:8000/bookings?date=${date}`
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
