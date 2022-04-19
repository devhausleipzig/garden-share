import BookingDrawer from "./BookingDrawer";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SimpleGrid } from "@chakra-ui/react";

export default {
  title: "Component/BookingDrawer",
  component: BookingDrawer,

  argTypes: {},
} as ComponentMeta<typeof BookingDrawer>;

const Template: ComponentStory<typeof BookingDrawer> = () => <BookingDrawer />;

// const exampleDrawer: BookingDrawerProps = {};
export const Drawer = Template.bind({});
Drawer.args = {};
