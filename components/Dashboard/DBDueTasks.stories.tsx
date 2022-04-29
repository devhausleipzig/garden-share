import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DBDueTasks from "./DBDueTasks";

export default {
  title: "Dashboard/DueTasks",
  component: DBDueTasks,
  argTypes: {},
} as ComponentMeta<typeof DBDueTasks>;

const Template: ComponentStory<typeof DBDueTasks> = (args) => <DBDueTasks />;

export const Tasks = Template.bind({});
Tasks.args = {};
