import { useEffect, useState } from "react";
import { DayCardProps } from "../components/DayCard/DayCard";
import { currentMonth } from "../utils/date";

export const useMonth = (monthIndex: number) => {
  const [availabilityArray, setAvailabilityArray] = useState<string[]>([]);
  async function fetchAvailability(currentMonth: number) {
    try {
      const response = await fetch(
        `http://localhost:8000/availability?month=${currentMonth}`
      );
      const result = await response.json();
      console.log(result);
      setAvailabilityArray(result);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchAvailability(monthIndex);
  }, [monthIndex]);
  return { availability: availabilityArray };
};
