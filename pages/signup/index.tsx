import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Text,
  useColorModeValue,
  Image,
  HStack,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const r = useRouter();

  const go2oLogin = () => {
    r.push("login");
  };

  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    console.log("name:", name);
    console.log("email:", email);
    console.log("password:", password);

    // clear input fields
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      alignItems={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <HStack
        minH={"80vh"}
        minW={"80vw"}
        spacing={0}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"lg"}
        overflow={"hidden"}
      >
        <Stack overflow={"clip"}>
          <Image
            maxH={"80vh"}
            minW={"40vw"}
            objectFit="cover"
            src="https://i.pinimg.com/564x/dc/7c/86/dc7c8600fe552d7c74438f32666cf5bf.jpg"
            alt="splash"
          />
        </Stack>

        <Stack maxW={"lg"}>
          <Stack align={"center"}>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://www.vhv.rs/dpng/d/13-133198_garden-icon-png-transparent-png.png"
              alt="login"
            />
          </Stack>
          <Box bg={useColorModeValue("white", "gray.700")} p={4}>
            <Stack spacing={4}>
              <form onSubmit={loginHandler}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    required={true}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    required={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    required={true}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Stack spacing={10} mt={2}>
                  <Text fontSize="md">
                    Already have an account? &nbsp;
                    <Link onClick={go2oLogin}>Login</Link>
                  </Text>
                  <Button
                    type={"submit"}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </HStack>
    </Flex>
  );
};

export default SignUp;
