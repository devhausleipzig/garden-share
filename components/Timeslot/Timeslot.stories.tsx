import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Timeslot from "./Timeslot";
import { TimeslotProps } from "../Timeslot/Timeslot";

export default {
  title: "Component/Timeslot",
  component: Timeslot,

  argTypes: {},
} as ComponentMeta<typeof Timeslot>;

const exampleTimeslot: TimeslotProps = {
  time: "10:00 - 11:00",
  status: "free",
};

const Template: ComponentStory<typeof Timeslot> = (args) => (
  <Timeslot {...args} />
);

export const Booked = Template.bind({});
Booked.args = {
  ...exampleTimeslot,
  status: "booked",
  bookedBy: "Simon",
};
export const Free = Template.bind({});
Free.args = {
  ...exampleTimeslot,
};
