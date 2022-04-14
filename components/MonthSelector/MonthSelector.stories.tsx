import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MonthSelector from "./MonthSelector";
import { currentMonth } from "../../utils/date";

export default {
  title: "Calendar/MonthSelector",
  component: MonthSelector,
  argTypes: {},
} as ComponentMeta<typeof MonthSelector>;

const Template: ComponentStory<typeof MonthSelector> = (args) => (
  <MonthSelector {...args} />
);

export const Default = Template.bind({});
Default.args = {
  currentMonth,
};
