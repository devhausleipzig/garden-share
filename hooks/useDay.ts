import { useEffect, useState } from "react";
import { Booking, Task } from "../utils/types";
import { format, setDate } from "date-fns";

export const useDay = (dayofMonth: number, monthIndex: number) => {
  const date = setDate(new Date(2022, monthIndex - 1), dayofMonth);
  const [bookingArray, setBookingArray] = useState<Booking[]>([]);
  const [taskArray, setTaskArray] = useState<Task[]>([]);

  async function getBookings(date: Date) {
    try {
      const response = await fetch(
        `http://localhost:8000/bookings?date=${format(date, "yyyy-MM-dd")}`
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
  }, [dayofMonth, monthIndex]);

  return { bookings: bookingArray, tasks: taskArray };
};
