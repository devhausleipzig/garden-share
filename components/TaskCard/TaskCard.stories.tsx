import TaskCard from "./TaskCard";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Component/TaskCard",
  component: TaskCard,

  argTypes: {},
} as ComponentMeta<typeof TaskCard>;

const Template: ComponentStory<typeof TaskCard> = (args) => (
  <TaskCard />
  //<TaskCard {...args} />
);

export const Default = Template.bind({});
