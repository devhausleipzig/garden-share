import type { NextPage } from "next";
import { useState, useRef } from "react";
import EmojiReaction from "../components/EmojiReaction/EmojiReaction";
// import MockHeader from "../components/MockHeader/MockHeader";
import DateSelector from "../components/DateSelector/DateSelector";
import MessageCard from "../components/MessageCard/MessageCard";

const MessageBoard: NextPage = () => {
  return (
    <>
      <DateSelector />
      <MessageCard
        type={"LargeCard"}
        title={"test"}
        content={"test1"}
        date={"03.10.2022"}
        user={{
          name: "Dan",
          image: "none",
        }}
      />
    </>
  );
};

export default MessageBoard;
