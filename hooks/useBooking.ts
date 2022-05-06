import { create } from "domain";
import { useEffect } from "react";
import { MessageProps, Task, User } from "../utils/types";

export async function publishMessage(title: string, bookedBy: User) {
  let autoMessage: MessageProps = {
    title: title,
    content: `${bookedBy.firstName} booked a public event!`,
    author: bookedBy,
    type: "SmallCard",
  };
  try {
    const postMessage = await fetch("http://localhost:8000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(autoMessage),
    });
  } catch (err) {
    console.log(err);
  }
}

export async function postBooking(
  bookedBy: User,
  task: Task | undefined,
  end: Date,
  start: Date,
  overnight: boolean,
  isPrivate: boolean,
  published: boolean,
  title: string
) {
  let data = {
    task: task?.identifier || "",
    end: end.toISOString(),
    start: start.toISOString(),
    overnight,
    isPrivate,
    published,
    title,
  };

  console.log(bookedBy);

  try {
    const booking = await fetch(
      `http://localhost:8000/user/${bookedBy.identifier}/bookings`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    // if (published) {
    //   publishMessage(title, bookedBy);
    // }
    console.log("SUCCESSFULLY BOOKED");
  } catch (err) {
    console.log(err);
  }
}
