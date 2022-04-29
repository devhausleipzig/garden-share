import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WeatherWidget from "./WeatherWidget";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "WeatherWidget/widget",
  component: WeatherWidget,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof WeatherWidget>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof WeatherWidget> = (args) => (
  <WeatherWidget {...args} />
);

export const WeatheArgs = Template.bind({});
WeatheArgs.args = {
    bgImg: "/images/sunny.webp",
  icon: '/addIcon.svg',
  temp: 100,
  wind: 0,
  minTemp: 50,
  maxTemp: 100,
  precipitation: 90
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args