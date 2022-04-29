import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dashboard from "./Dashboard";

export default {
  title: "Dashboard/Dashboard",
  component: Dashboard,
  argTypes: {},
} as ComponentMeta<typeof Dashboard>;

const Template: ComponentStory<typeof Dashboard> = (args) => <Dashboard />;

export const DashboardPage = Template.bind({});
DashboardPage.args = {};
