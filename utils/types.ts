export type Booking = {
  identifier: string;
  createdAt: Date;
  updatedAt: Date;
  start: string;
  end: string;
  private: boolean;
  overnight: boolean;
  published: boolean;
  title: string | null;
  userId: string;
  messageId: string | null;
};

export type Task = {
  identifier?: string;
  bookingId?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  type: TaskType;
  deadline?: Date;
  steps?: string;
  repeating?: Repeats;
};

export type TaskType =
  | "HARVESTING"
  | "WATERING"
  | "PRUNING"
  | "SEEDING"
  | "BUILDING"
  | "WEEDING";

export type Repeats = "NONE" | "DAILY" | "WEEKLY" | "MONTHLY";

export type Status = "free" | "booked";

export type Role = "USER" | "ADMIN";

export type messageType = "SmallCard" | "LargeCard";

export type TimeslotProps = {
  time: string;
  status: Status;
  bookedBy?: string;
};

export type MessageProps = {
  title: string;
  content: string;
  author: User;
  type: messageType;
};

export type User = {
  email: string;
  identifier: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  role: Role;
};