import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DBMessages from "./DBMessages";

export default {
  title: "Dashboard/Messages",
  component: DBMessages,
  argTypes: {},
} as ComponentMeta<typeof DBMessages>;

const Template: ComponentStory<typeof DBMessages> = (args) => <DBMessages />;

export const Messages = Template.bind({});
Messages.args = {};
