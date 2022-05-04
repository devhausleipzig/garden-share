import { useEffect, useState } from "react";

export const useMonth = (monthIndex: number) => {
  const [availabilityArray, setAvailabilityArray] = useState<string[]>([]);
  async function fetchAvailability(monthIndex: number) {
    try {
      const response = await fetch(
        `http://localhost:8000/availability?month=${monthIndex}`
      );
      const result = await response.json();

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
