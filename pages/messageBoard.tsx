import type { NextPage } from "next";
import EmojiReaction from "../components/EmojiReaction/EmojiReaction";
import MockHeader from "../components/MockHeader/MockHeader";

const MessageBoard: NextPage = () => {
  return (
    <div>
      <EmojiReaction
        userId={"id1"}
        emojiProps={[
       
        ]}
      />
    </div>
  );
};

export default MessageBoard;

/*
   {
            users: ["id1", "id2"],
            emoji: "🐑",
            count: 0,
          },
          {
            users: ["id1"],
            emoji: "😁",
            count: 0,
          },
          */