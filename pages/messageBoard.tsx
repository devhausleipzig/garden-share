import type { NextPage } from "next";
import EmojiReaction from "../components/EmojiReaction/EmojiReaction";
import MockHeader from "../components/MockHeader/MockHeader";

const MessageBoard: NextPage = () => {
  return (
    <div>
      <EmojiReaction userId={'id2'} emojiProps={[

        {
          users:['id1', 'id2'],
          emoji: "🐑",
          count: 1,
        },
        {
          users:['id1'],
          emoji: "😁",
          count: 3,
        },
      ]} />
    </div>
  );
};

export default MessageBoard;
