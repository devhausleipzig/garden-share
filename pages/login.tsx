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
import { FormEvent, useContext, useState } from "react";
import { useAuth } from "../context/authContext";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const r = useRouter();

  const go2oSignup = () => {
    r.push("signup");
  };

  const loginHandler = (e: FormEvent) => {
    e.preventDefault();
    login(email, password);
    r.push("/");
    console.log("email:", email);
    console.log("password:", password);

    // clear input fields
    setEmail("");
    setPassword("");
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      alignItems="center"
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <HStack
        spacing="4"
        bg={useColorModeValue("white", "gray.700")}
        rounded="lg"
        overflow="hidden"
        maxH="80vH"
      >
        <Stack>
          <Image
            src="https://i.pinimg.com/564x/dc/7c/86/dc7c8600fe552d7c74438f32666cf5bf.jpg"
            alt="splash"
            minH="80vh"
          />
        </Stack>

        <Stack maxW="lg">
          <Stack align="center">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://www.vhv.rs/dpng/d/13-133198_garden-icon-png-transparent-png.png"
              alt="login"
            />
          </Stack>
          <Box bg={useColorModeValue("white", "gray.700")} p="12">
            <Stack spacing="4">
              <form onSubmit={loginHandler}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <Stack spacing="10" mt="2">
                  <Text fontSize="md">
                    Don&lsquo;t have an account? &nbsp;
                    <Link onClick={go2oSignup}>SignUp</Link>
                  </Text>
                  <Button
                    type="submit"
                    bg="blue.400"
                    color="white"
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

export default Login;
