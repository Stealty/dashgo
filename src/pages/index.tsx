import { Button, Flex, Stack } from "@chakra-ui/react";
import { SignInBackground } from "../components/backgrounds/SignInBackground";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <>
      <SignInBackground />
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
            <Input name="email" type="email" label="E-mail" />
            <Input name="password" type="password" label="senha" />
          </Stack>
          <Button type="submit" mt="6" colorScheme="blue">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
