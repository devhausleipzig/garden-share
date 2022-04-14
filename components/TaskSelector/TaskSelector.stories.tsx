import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TaskSelector from "./TaskSelector";

export default {
  title: "Calendar/TaskSelector",
  component: TaskSelector,
  argTypes: {},
} as ComponentMeta<typeof TaskSelector>;

const Template: ComponentStory<typeof TaskSelector> = (args) => (
  <TaskSelector {...args} />
);

export const Checked = Template.bind({});
Checked.args = {
  title: "Hard Task",
  date: "today",
  status: "checked",
  type: "building",
};
export const Unchecked = Template.bind({});
Unchecked.args = {
  title: "Annoying Task",
  date: "Tomorrow",
  status: "unchecked",
  type: "watering",
};
