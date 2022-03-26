import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
      DashGo
      <Text color="blue.500" m="1" as="span">
        .
      </Text>
    </Text>
  );
}
