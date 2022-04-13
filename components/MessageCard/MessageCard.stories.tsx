import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MessageCard from "./MessageCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "MessageCard/Card",
  component: MessageCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MessageCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MessageCard> = (args) => (
  <MessageCard {...args} />
);

export const LargeCard = Template.bind({});
LargeCard.args = {
  type: "LargeCard",
  title: "BBQ Time",
  content:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, vero mollitia consectetur error tenetur hic atque magnam iste! Aliquid, aspernatur!",
  date: "Today",
  user: { name: "Dan Abramov", image: "https://bit.ly/dan-abramov" },
  img: "/bbq.jpg",
};
export const SmallCard = Template.bind({});
SmallCard.args = {
  type: "SmallCard",
  title: "BBQ Time",
  content:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, vero mollitia consectetur error tenetur hic atque magnam iste! Aliquid, aspernatur!",
  date: "Today",
  user: { name: "Dan Abramov", image: "https://bit.ly/dan-abramov" },
  img: "",
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
