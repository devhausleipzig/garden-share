import { create } from "domain";
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

  let autoMessage: Message = {
    title: title,
    content: `${user} booked a public event!`,
    author: bookedBy,
    type: "SmallCard",
    date: String(start),
  }

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
  if(message) {
    async function postMessage() {
      try {
        const message = await fetch(
          'http://localhost:8000/messages',
          {
            method: "POST",
            body: 
          }
        )
      }
    }
  }
};
