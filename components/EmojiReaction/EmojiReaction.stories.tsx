import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import EmojiReaction from "./EmojiReaction";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "MessageCard/EmojiReaction",
  component: EmojiReaction,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof EmojiReaction>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EmojiReaction> = (args) => (
  <EmojiReaction />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
