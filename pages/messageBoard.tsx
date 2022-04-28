import type { NextPage } from "next";
import { useState, useRef } from "react";
import EmojiReaction from "../components/EmojiReaction/EmojiReaction";
// import MockHeader from "../components/MockHeader/MockHeader";
import DateSelector from "../components/DateSelector/DateSelector";
import MessageCard from "../components/MessageCard/MessageCard";
import { Message as MessageProps } from "../components/MessageCard/MessageCard";
import { Box } from "@chakra-ui/react";

const messageArray: MessageProps[] = [
  {
    type: "SmallCard",
    title: "test",
    content: "Lorem Ipsum",
    date: "03.10.2022",
    user: { name: "Dan", image: "none" },
  },
  {
    type: "SmallCard",
    title: "test",
    content: "test1",
    date: "03.10.2022",
    user: { name: "Dan", image: "none" },
  },
  {
    type: "SmallCard",
    title: "test",
    content: "test1",
    date: "03.10.2022",
    user: { name: "Dan", image: "none" },
  },
  {
    type: "SmallCard",
    title: "test",
    content: "test1",
    date: "03.10.2022",
    user: { name: "Dan", image: "none" },
  },
];

const MessageBoard: NextPage = () => {
  const [messages, setMessages] = useState<MessageProps[]>(messageArray);

  return (
    <>
      <Box mt={3}>
        <DateSelector />
      </Box>
      {messages.map((message, index) => {
        return (
          <Box m={3}>
            <MessageCard
              key={index}
              type={message.type}
              title={message.title}
              content={message.content}
              date={message.date}
              user={message.user}
            />
          </Box>
        );
      })}
    </>
  );
};

export default MessageBoard;
