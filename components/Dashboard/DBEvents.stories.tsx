import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DBEvents from "./DBEvents";

export default {
  title: "Dashboard/Events",
  component: DBEvents,
  argTypes: {},
} as unknown as ComponentMeta<typeof DBEvents>;

const Template: ComponentStory<typeof DBEvents> = (args) => <DBEvents />;

export const Events = Template.bind({});
Events.args = {};
