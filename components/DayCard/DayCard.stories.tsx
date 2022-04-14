import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DayCard from "./DayCard";

export default {
  title: "DayCard/Card",
  component: DayCard,
  argTypes: {},
} as ComponentMeta<typeof DayCard>;

const Template: ComponentStory<typeof DayCard> = (args) => (
  <DayCard {...args} />
);

export const AllFree = Template.bind({});
AllFree.args = {
  date: 1,
  weatherStart: "fog",
  weatherEnd: "rainSnow",
  slots: 12,
};
export const FreeSlots = Template.bind({});
FreeSlots.args = {
  date: 2,
  weatherStart: "rain",
  weatherEnd: "sunRain",
  slots: 3,
};
export const Full = Template.bind({});
Full.args = {
  date: 3,
  weatherStart: "sunSnow",
  weatherEnd: "sun",
  slots: 0,
};
export const Icons = Template.bind({});
Icons.args = {
  date: 4,
  weatherStart: "thunderstorm",
  weatherEnd: "thunderstorm",
  slots: 0,
};
