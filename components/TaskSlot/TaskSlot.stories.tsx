import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TaskSlot from "./TaskSlot";
import { TaskSlotProps } from "./TaskSlot";

export default {
  title: "Component/TaskSlot",
  component: TaskSlot,

  argTypes: {},
} as ComponentMeta<typeof TaskSlot>;

const exampleTaskSlot: TaskSlotProps = {
  taskName: "Watering",
  status: "free",
};

const Template: ComponentStory<typeof TaskSlot> = (args) => (
  <TaskSlot {...args} />
);

export const Taken = Template.bind({});
Taken.args = {
  ...exampleTaskSlot,
  status: "taken",
  bookedBy: "Simon",
};
export const Free = Template.bind({});
Free.args = {
  ...exampleTaskSlot,
};
