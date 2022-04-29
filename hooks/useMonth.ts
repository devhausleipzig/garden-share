import { useEffect, useState } from "react";
import { DayCardProps } from "../components/DayCard/DayCard";

export const useMonth = () => {
  const [availabilityArray, setAvailabilityArray] = useState<string[]>([]);
  async function fetchAvailability(currentMonth: number) {
    try {
      const response = await fetch(
        `http://localhost:8000/availability?month=${currentMonth}`
      );
      const result = await response.json();
      setAvailabilityArray(result);
    } catch (err) {
      console.log(err);
    }
  }
  const currentMonth = new Date().getMonth() + 1;
  useEffect(() => {
    fetchAvailability(currentMonth);
  }, []);
  return { availability: availabilityArray, currentMonth };
};
