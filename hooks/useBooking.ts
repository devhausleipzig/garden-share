import { create } from "domain";
import { useEffect } from "react";
import { MessageProps, Task, User } from "../utils/types";

export const useBooking = (
  bookedBy: User,
  task: Task | undefined,
  end: Date,
  start: Date,

  overnight: boolean,
  isPrivate: boolean,
  published: boolean,
  title: string
) => {
  let autoMessage: MessageProps = {
    title: title,
    content: `${bookedBy.firstName} booked a public event!`,
    author: bookedBy,
    type: "SmallCard",
  };
  let data = {
    task,
    end,
    start,
    message: autoMessage,
    overnight,
    isPrivate,
    published,
    title,
  };

  async function publishMessage() {
    try {
      const postMessage = await fetch("http://localhost:8000/messages", {
        method: "POST",
        body: JSON.stringify(autoMessage),
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function postBooking(userId: string) {
    try {
      const booking = await fetch(
        `http://localhost:8000/user/${userId}/bookings`,
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
  if (published) {
    useEffect(() => {
      publishMessage();
      postBooking(bookedBy.identifier);
    }, []);
  } else {
    useEffect(() => {
      postBooking(bookedBy.identifier);
    }, []);
  }
};
