import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dash from "./Dash";

export default {
  title: "Dashboard/Dashboard",
  component: Dash,
  argTypes: {},
} as ComponentMeta<typeof Dash>;

const Template: ComponentStory<typeof Dash> = (args) => <Dash />;

export const Dashboard = Template.bind({});
Dashboard.args = {};
