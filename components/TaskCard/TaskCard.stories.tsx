import TaskCard, { Status, TaskCardProps } from "./TaskCard";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SimpleGrid } from "@chakra-ui/react";

export default {
  title: "Component/TaskCard",
  component: TaskCard,

  argTypes: {},
} as ComponentMeta<typeof TaskCard>;

const Template: ComponentStory<typeof TaskCard> = (args) => (
  <SimpleGrid columns={2} spacing={4}>
    <TaskCard {...args} />
  </SimpleGrid>
);

const exampleTask: TaskCardProps = {
  clickHandler: () => {},
  buttonClickHandler: () => {},
  title: "Seeding",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nemo magnam reiciendis culpa accusantium debitis voluptatibus atque unde in provident nam porro omnis reprehenderit enim illum, ducimus voluptas autem veritatis.",
  stars: 1,
  assigned: false,
  status: "overdue",
};

export const Overdue = Template.bind({});
Overdue.args = {
  ...exampleTask,
};
export const Soon = Template.bind({});
Soon.args = {
  ...exampleTask,
  status: "due soon",
};
export const NotUrgent = Template.bind({});
NotUrgent.args = {
  ...exampleTask,
  status: "not urgent",
};
