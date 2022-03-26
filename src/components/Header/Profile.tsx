import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box>
        <Text>Gabriel Ribeiro</Text>
        <Text color="gray.300">biellbigama@gmail.com</Text>
      </Box>
      <Avatar size="md" bg="none" src="https://www.github.com/stealty.png" />
    </Flex>
  );
}
