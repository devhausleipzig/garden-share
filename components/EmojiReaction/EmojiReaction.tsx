import React, { useEffect, useState } from "react";
import Picker from "emoji-picker-react";
import AddEmoji from "./AddEmoji";
import { Flex, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

interface emojiEvent {
  event: any;
  emojiObject: any;
}

interface EmojiProps {
  users?:string[], // ['id1', 'id2']
  emoji: string;
  count: number;
}

interface EmojiPropsArray{
  userId: string,
  emojiProps: EmojiProps[]
}

const EmojiReaction = ( {userId ,emojiProps}:EmojiPropsArray) => {

  const [emojis, setEmojis] = useState<EmojiProps[]>(emojiProps);
  const [pickerBox, setPickerBox] = useState(false);

  const [chosenEmoji, setChosenEmoji] = useState(null);

  const showPicker = () => {
    console.log("clicked");
    setPickerBox(true);
  };

  const onEmojiClick = (_event: any, emojiObject: any) => {
    setPickerBox(false);
    setChosenEmoji(emojiObject);

    setEmojis(() => {
      return [
        ...emojis,
        {
          users:[userId], // not optimal
          emoji: emojiObject.emoji,
          count: 1,
        },
      ];
    });
  };

  const drawEmojis = emojis.map((emj, index) => {
    return <AddEmoji key={index} userId={userId} users={emj.users}  emoji={emj.emoji} count={emj.count} />;
  });
  console.log;
  return (
    <>
      <Flex gap={2} userSelect={"none"} cursor={"pointer"}>
        {drawEmojis}

        <span onClick={showPicker}>
          <IconButton icon={<AddIcon />} aria-label={""} size={"sm"} />
        </span>
      </Flex>
      {pickerBox && <Picker onEmojiClick={onEmojiClick} />}
    </>
  );
};

export default EmojiReaction;
