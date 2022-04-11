import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image, Container, HStack
} from '@chakra-ui/react';

const Login = ()=>{
    return(
        <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        alignItems={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <HStack spacing={0} bg={useColorModeValue('white', 'gray.700')} rounded={'lg'} overflow={'hidden'}>


            <Stack >
                <Image 
                src='https://i.pinimg.com/564x/dc/7c/86/dc7c8600fe552d7c74438f32666cf5bf.jpg' 
                alt='splash' />
            </Stack>

            <Stack maxW={'lg'}>
                <Stack align={'center'}>
                    <Image
                        borderRadius='full'
                        boxSize='150px'
                        src='https://www.vhv.rs/dpng/d/13-133198_garden-icon-png-transparent-png.png'
                        alt='login'
                    />

                </Stack>
                <Box

                    bg={useColorModeValue('white', 'gray.700')}
                    p={4}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Text fontSize='md'>Don&lsquo;t have an account? 	&nbsp;
                                <Link>SignUp</Link>
                            </Text>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>

        </HStack>
    </Flex>


    )
}

export default Login