import { Stack, HStack, VStack, Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { Image } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Avatar } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";

export const Header = () => {
  return (
    <HStack as="header" bg="teal.300" justify="space-between" py={4} px={4}>
      <Box h={8} w={8} bg="">
        <Image boxSize="" objectFit="cover" alt="Logo" src="Logo.png" />
      </Box>
      <HStack spacing={8} fontSize="xl">
        <LinkWrapper>
          <Link href="/calendar">
            <a>Calendar</a>
          </Link>
        </LinkWrapper>

        <LinkWrapper>
          <Link href="/tasks">
            <a>Tasks</a>
          </Link>
        </LinkWrapper>
        <LinkWrapper>
          <Link href="/message-board">
            <a>Message Board</a>
          </Link>
        </LinkWrapper>
      </HStack>

      <Menu>
        <MenuButton>
          <Avatar
            size="lg"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>
              <Link href="/settings">
                <a>Settings</a>
              </Link>
            </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Account">
            <MenuItem>
              <Link href="/logout">
                <a>Logout</a>
              </Link>
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </HStack>
  );
};

type LinkWrapperProps = {
  children: ReactNode;
};
const LinkWrapper = ({ children }: LinkWrapperProps) => {
  return <Box _hover={{ color: "white" }}>{children}</Box>;
};
