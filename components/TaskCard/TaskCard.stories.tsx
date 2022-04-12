import TaskCard from "./TaskCard";
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
    <TaskCard {...args} />
    <TaskCard {...args} />
  </SimpleGrid>
);

export const Default = Template.bind({});
