import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MockHeader from "./MockHeader";

export default {
  title: "Test/Header",
  component: MockHeader,

  argTypes: {},
} as ComponentMeta<typeof MockHeader>;

const Template: ComponentStory<typeof MockHeader> = (args) => (
  <MockHeader {...args} />
);

export const Default = Template.bind({});
