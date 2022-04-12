import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import AddTaskButton from "../components/AddTaskButton/AddTaskButton";

export default {
  title: "Component/AddTaskButton",
  component: AddTaskButton,

  argTypes: {},
} as ComponentMeta<typeof AddTaskButton>;

const Template: ComponentStory<typeof AddTaskButton> = (args) => (
  <AddTaskButton {...args} />
);

export const Default = Template.bind({});
