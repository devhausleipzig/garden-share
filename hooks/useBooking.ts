import { create } from "domain";
import { Message } from "../components/MessageCard/MessageCard";
import { Task } from "../utils/types";

export const useBooking = (
  bookedBy: string,
  task: Task,
  end: Date,
  start: Date,
  message: Message,
  overnight: boolean,
  isPrivate: boolean,
  published: boolean,
  title: string
) => {
  let data = {
    task,
    end,
    start,
    message,
    overnight,
    isPrivate,
    published,
    title,
  };

  async function postBooking(bookedBy: string) {
    try {
      const booking = await fetch(
        `http://localhost:8000/user/${bookedBy}/bookings`,
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      console.log("SUCCESSFULLY BOOKED");
    } catch (err) {
      console.log(err);
    }
  }
};
