import BookingDrawer from "./BookingDrawer";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SimpleGrid } from "@chakra-ui/react";
import { Task } from "../TaskSelector/TaskSelector";
import { TimeslotProps } from "../Timeslot/Timeslot";

const timeSlots: TimeslotProps[] = [
  {
    time: "08:00 - 09:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "09:00 - 10:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "10:00 - 11:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "11:00 - 12:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "12:00 - 13:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "13:00 - 14:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "14:00 - 15:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "15:00 - 16:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "17:00 - 18:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "18:00 - 19:00",
    status: "free",
    bookedBy: "",
  },
  {
    time: "19:00 - 08:00",
    status: "free",
    bookedBy: "",
  },
];

const tasks: Task[] = [
  {
    title: "Watering",
    tasktype: "watering",
    taken: false,
  },
  {
    title: "Seeding",
    tasktype: "watering",
    taken: true,
  },
  {
    title: "Building Fence",
    tasktype: "building",
    taken: false,
  },
];
export default {
  title: "Component/BookingDrawer",
  component: BookingDrawer,

  argTypes: {},
} as ComponentMeta<typeof BookingDrawer>;

const Template: ComponentStory<typeof BookingDrawer> = (args) => (
  <BookingDrawer {...args} />
);

// const exampleDrawer: BookingDrawerProps = {};
export const Drawer = Template.bind({});
Drawer.args = { isOpen: true, onClose: () => {}, tasks, timeSlots };
