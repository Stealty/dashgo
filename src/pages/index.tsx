import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              type="email"
              focusBorderColor="blue.300"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="md"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password </FormLabel>
            <Input
              name="password"
              type="password"
              focusBorderColor="blue.300"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: "gray.900",
              }}
              size="md"
            />
          </FormControl>
        </Stack>
        <Button type="submit" mt="6" colorScheme="blue">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
