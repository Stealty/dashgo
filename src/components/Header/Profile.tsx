import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box>
          <Text>Gabriel Ribeiro</Text>
          <Text color="gray.300">biellbigama@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" bg="none" src="https://www.github.com/stealty.png" />
    </Flex>
  );
}
