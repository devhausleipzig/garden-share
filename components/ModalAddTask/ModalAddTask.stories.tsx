import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ModalAddTask } from "./ModalAddTask";
import {TaskSteps} from "./TaskSteps"

export default {
  title: "Component/ModalAddTask",
  component: ModalAddTask,
argTypes: {},
} as ComponentMeta<typeof ModalAddTask>;

const Template: ComponentStory<typeof ModalAddTask> = (args) => (
  <>
  <ModalAddTask />
  <TaskSteps textValue="lorem ipsom" />
  </>
);

export const Default = Template.bind({});