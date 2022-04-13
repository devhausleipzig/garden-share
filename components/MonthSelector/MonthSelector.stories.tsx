import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MonthSelector from "./MonthSelector";


export default {
    title: "Calendar/MonthSelector",
    component: MonthSelector,
    argTypes: {

    },
} as ComponentMeta<typeof MonthSelector>;

const Template: ComponentStory<typeof MonthSelector> = () => <MonthSelector />;

export const Default = Template.bind({});
