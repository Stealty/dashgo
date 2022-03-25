import {
  Flex,
  Image,
  Text,
  Input,
  Icon,
  HStack,
  color,
  Box,
  Avatar,
} from "@chakra-ui/react";
import { BellIcon, SearchIcon, SettingsIcon } from "@chakra-ui/icons";

export function Header() {
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
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        DashGo
        <Text color="blue.500" m="1" as="span">
          .
        </Text>
      </Text>
      <Flex
        as="label"
        flex="1"
        py="3"
        px="7"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Image />
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="buscar na plataforma"
          _placeholder={{ color: "gray.400" }}
        />

        <Icon as={SearchIcon} fontSize="20" align="center" mt="0.5" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={BellIcon} />
          <Icon as={SettingsIcon} />
          <Flex align="center">
            <Box>
              <Text>Gabriel Ribeiro</Text>
              <Text color="gray.300">biellbigama@gmail.com</Text>
            </Box>
            <Avatar
              size="md"
              bg="none"
              src="https://www.github.com/stealty.png"
            />
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
}
