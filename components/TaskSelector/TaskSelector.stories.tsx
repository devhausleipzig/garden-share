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
  title: "Annoying Task",
  date: "today",
  status: "checked",
};
export const Unchecked = Template.bind({});
Unchecked.args = {
  title: "Annoying Task",
  date: "today",
  status: "unchecked",
};

export const Watering = Template.bind({});
Watering.args = {
  title: "Annoying Task",
  date: "today",
  status: "unchecked",
  tasktype: "watering",
};

export const Weeding = Template.bind({});
Weeding.args = {
  title: "Annoying Task",
  date: "today",
  status: "unchecked",
  tasktype: "weeding",
};

export const Pruning = Template.bind({});
Pruning.args = {
  title: "Annoying Task",
  date: "today",
  status: "unchecked",
  tasktype: "pruning",
};

export const Building = Template.bind({});
Building.args = {
  title: "Annoying Task",
  date: "today",
  status: "unchecked",
  tasktype: "building",
};
