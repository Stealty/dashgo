import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, Icon } from "@chakra-ui/react";

export function SearchBox() {
  return (
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
  );
}
