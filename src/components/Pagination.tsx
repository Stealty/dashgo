import { Stack, Button, Icon, Box } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

export function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          as="a"
          w="4"
          size="sm"
          fontSize="xs"
          colorScheme="blue"
          disabled
          _disabled={{
            bg: "blue.500",
            cursor: "default",
          }}
        >
          1
        </Button>
        <Button
          as="a"
          w="4"
          size="sm"
          fontSize="xs"
          colorScheme="blue"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          2
        </Button>
        <Button
          as="a"
          w="4"
          size="sm"
          fontSize="xs"
          colorScheme="blue"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          3
        </Button>
        <Button
          as="a"
          w="4"
          size="sm"
          fontSize="xs"
          colorScheme="blue"
          bg="gray.700"
          _hover={{
            bg: "gray.500",
          }}
        >
          4
        </Button>
      </Stack>
    </Stack>
  );
}
