import React, { useEffect, useState } from 'react';
import Picker from 'emoji-picker-react';
import AddEmoji from './AddEmoji'
import { Flex } from '@chakra-ui/react';

interface emojiEvent {
    event: any,
    emojiObject: any
}


interface EmojiProps {
    emoji: string,
    count: number
}

const EmojiReaction = () => {

    const [emojis, setEmojis] = useState<EmojiProps[]>([
        {
            emoji: '🐑',
            count: 0
        },
    ]);
    const [pickerBox, setPickerBox] = useState(false);

    const [chosenEmoji, setChosenEmoji] = useState(null);
 
    const showPicker = () => {
        console.log("clicked")
        setPickerBox(true)
    }

    const onEmojiClick = (_event: any, emojiObject: any) => {
        setPickerBox(false)
        setChosenEmoji(emojiObject);

        setEmojis((prev) => {
            return [
                ...emojis,
                {
                    emoji: emojiObject.emoji,
                    count: 0
                }
            ]
        })

    }

    const drawEmojis = emojis.map(
        (emj, index) => {
            return <AddEmoji key={index} emoji={emj.emoji} count={emj.count} />
        }
    )
    console.log
    return (
        <>
            <Flex gap={2} userSelect={'none'}   cursor={'pointer'}>
                {drawEmojis}

                <span onClick={showPicker} >
                    ➕
                </span>
            </Flex>
            {pickerBox && <Picker onEmojiClick={onEmojiClick} />}
        </>
    );
};



export default EmojiReaction;

