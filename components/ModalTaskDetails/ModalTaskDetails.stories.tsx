import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ModalTaskDetails, { TaskDetailsModalProps } from "./ModalTaskDetails";

export default {
  title: "Component/ModalTaskDetails",
  component: ModalTaskDetails,
  argTypes: {},
} as ComponentMeta<typeof ModalTaskDetails>;

const Template: ComponentStory<typeof ModalTaskDetails> = (args) => (
  <ModalTaskDetails {...args} />
);

export const Modal = Template.bind({});
Modal.args = {
  steps: ["1", "2", "3"],
  type: "WATERING",
};
