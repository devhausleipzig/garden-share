import { Stack, HStack, VStack, Box, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { Image } from '@chakra-ui/react'


export const Header = () => {
return (
    <HStack as="header" bg="teal.300" justify="space-between" py={4} px={4}>
        <Box h={8} w={8} bg="">
<Image  
 boxSize=''
 objectFit='cover'
 alt='Logo'
 src='Logo.png'
/>
        </Box>
        <HStack spacing={8}>
<Link href="#">
    <a>Calendar</a>
</Link>

<Link href="#">
    <a>Tasks</a>
</Link>

<Link href="#">
    <a>Message Board</a>
</Link>

<Link href="#">
    <a>Settings</a>
</Link>

        </HStack>
        <Button>Login</Button>
    </HStack>
    
)

}