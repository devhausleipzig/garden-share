import AddTaskDrawer, { AddTaskDrawerProps } from "./AddTaskDrawer";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SimpleGrid } from "@chakra-ui/react";

export default {
  title: "Component/AddTaskDrawer",
  component: AddTaskDrawer,

  argTypes: {},
} as ComponentMeta<typeof AddTaskDrawer>;

const Template: ComponentStory<typeof AddTaskDrawer> = (args) => (
  <AddTaskDrawer {...args} />
);

const exampleDrawer: AddTaskDrawerProps = {
  types: ["watering", "planting", "seeding", "pruning"], // will be replaced by union type when task types are defined
  title: "",
  dueDate: "2022/05/08",
  repeatChecked: false,
  repeatType: "none",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam assumenda recusandae optio ab dicta laudantium sapiente repellendus molestias quia quo!",
  isOpen: true,
  onOpen: () => {},
  onClose: () => {},
  clickHandler: () => {},
};
export const Drawer = Template.bind({});
Drawer.args = {
  ...exampleDrawer,
};
