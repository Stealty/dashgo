import { BellIcon, SettingsIcon } from "@chakra-ui/icons";
import { HStack, Icon } from "@chakra-ui/react";

export function NotificationsNav() {
  return (
    <HStack
      mx="5"
      pr="5"
      py="1"
      color="gray.300"
      borderColor="gray.700"
      spacing="4"
      borderRightWidth={1}
    >
      <Icon as={BellIcon} />
      <Icon as={SettingsIcon} />
    </HStack>
  );
}
