import React, {useState } from "react";
import Picker from "emoji-picker-react";
import AddEmoji from "./AddEmoji";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { nanoid } from "nanoid";

export interface EmojiProps {
  users?: string[]; // ['id1', 'id2']
  emoji: string;
  count: number;
  emojiID: string;
}

interface EmojiPropsArray {
  userId: string;
  emojiProps: EmojiProps[];
}

const EmojiReaction = ({ userId , emojiProps }: EmojiPropsArray) => {

  const [emojis, setEmojis] = useState<EmojiProps[]>(emojiProps);
  const [pickerBox, setPickerBox] = useState(false);

  function renderComponent(emojiID: string) {
    console.log("render", " emojiID:", emojiID);
    console.log("before", emojis);
    const newEmojis = emojis.filter((emj) => emj.emojiID != emojiID);
    console.log("after", newEmojis);
    setEmojis(newEmojis);
  }
  

  const togglePicker = () => {
    console.log("togglePicker:clicked");
    setPickerBox((prev)=> !prev);
  };

  const onEmojiClick = (_event: any, emojiObject: any) => {
    setPickerBox(false);
    setEmojis(() => {
      return [
        ...emojis,
        {
          users: [userId],
          count: 1,
          emoji: emojiObject.emoji,
          emojiID: nanoid(10),
        },
      ];
    });
  };

  return (
    <Box position={"relative"}>
      <Flex gap={2} userSelect={"none"} cursor={"pointer"} padding={2}>
        {emojis.map((emj, index) => {
          return (
            <AddEmoji
              key={index}
              emojiID={emj.emojiID}
              userId={userId}
              users={emj.users}
              emoji={emj.emoji}
              count={emj.count}
              renderAgain={renderComponent}
            />
          );
        })}

        <span onClick={togglePicker}>
          <IconButton icon={<AddIcon />} aria-label={""} size={"sm"} />
        </span>
      </Flex>
      {pickerBox && <Picker onEmojiClick={onEmojiClick} pickerStyle={{ position: 'absolute', zIndex: '999' }} />}
    </Box>
  );
};

export default EmojiReaction;
