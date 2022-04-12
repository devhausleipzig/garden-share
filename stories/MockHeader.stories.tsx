import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MockHeader from "../components/MockHeader/MockHeader";

export default {
  title: "Test/Header",
  component: MockHeader,

  argTypes: {},
} as ComponentMeta<typeof MockHeader>;

const Template: ComponentStory<typeof MockHeader> = (args) => (
  <MockHeader {...args} />
);

export const Default = Template.bind({});
