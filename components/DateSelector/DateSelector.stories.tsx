import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DateSelector from "./DateSelector";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "MessageBoard/DateSelector",
  component: DateSelector,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof DateSelector>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DateSelector> = () => <DateSelector />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
