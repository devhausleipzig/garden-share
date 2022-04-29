import type { NextPage } from "next";
import { useState, useRef } from "react";
import EmojiReaction from "../components/EmojiReaction/EmojiReaction";
// import MockHeader from "../components/MockHeader/MockHeader";
import DateSelector from "../components/DateSelector/DateSelector";
import MessageCard from "../components/MessageCard/MessageCard";
import { Message as MessageProps } from "../components/MessageCard/MessageCard";
import { Box } from "@chakra-ui/react";
import { useAuth } from "../context/authContext";
import {EmojiProps} from "../components/EmojiReaction/EmojiReaction";

//testing values:
const messageArray: MessageProps[] = [
  {
    type: "SmallCard",
    title: "test",
    content: "Lorem Ipsum",
    date: "03.10.2022",
    user: { name: "Dan", image: "none" },
    img:"",
    emojiProps:[
      {
        users:[],
        emoji: "🐑",
        count: 1,
        emojiID: '',
      },
      {
        users:[],
        emoji: "😁",
        count: 2,
        emojiID: '',
      }
    ]
  }
];

const MessageBoard: NextPage = () => {
  //the [messageArray] comes from testing values line:13 
  const [messages, setMessages] = useState<MessageProps[]>(messageArray);

  return (
    <>
      <Box mt={3}>
        <DateSelector />
      </Box>
      {messages.map((message, index) => {
        return (
          <Box  key={index}   m={3}>
            <MessageCard
              type={message.type}
              title={message.title}
              content={message.content}
              date={message.date}
              user={message.user}
              emojiProps={message.emojiProps}
            />
          </Box>
        );
      })}
    </>
  );
};

export default MessageBoard;
