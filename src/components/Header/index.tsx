import { Profile } from "./Profile";
import { NotificationsNav } from "./NotificationsNav";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      w="100%"
      as="header"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      <SearchBox />
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}