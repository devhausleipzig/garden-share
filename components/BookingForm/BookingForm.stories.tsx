import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Booking from "./BookingForm";

export default {
  title: "Component/Booking",
  component: Booking,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Booking>;

const Template: ComponentStory<typeof Booking> = (args) => (
  <Booking {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  colorScheme: "teal",
  children: "Booking Example",
};
