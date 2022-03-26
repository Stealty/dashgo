import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
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
        {number}
      </Button>
    );
  }
  return (
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
      {number}
    </Button>
  );
}
