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

export const Taken = Template.bind({});
Taken.args = {
  title: "Hard Task",
  date: "today",
  tasktype: "building",
  taken: true,
};
export const Untaken = Template.bind({});
Untaken.args = {
  title: "Annoying Task",
  date: "Tomorrow",
  tasktype: "watering",
  taken: false,
};

export const Watering = Template.bind({});
Watering.args = {
  title: "Annoying Task",
  date: "today",
  tasktype: "watering",
  taken: false,
};

export const Weeding = Template.bind({});
Weeding.args = {
  title: "Annoying Task",
  date: "today",
  tasktype: "weeding",
  taken: false,
};

export const Pruning = Template.bind({});
Pruning.args = {
  title: "Annoying Task",
  date: "today",
  tasktype: "pruning",
  taken: false,
};

export const Building = Template.bind({});
Building.args = {
  title: "Annoying Task",
  date: "today",
  tasktype: "building",
  taken: false,
};
