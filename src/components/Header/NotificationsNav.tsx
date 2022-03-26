import { BellIcon, SettingsIcon } from "@chakra-ui/icons";
import { HStack, Icon } from "@chakra-ui/react";

export function NotificationsNav() {
  return (
    <HStack
      mx={["6", "8", "10"]}
      pr={["6", "8", "10"]}
      py="1"
      color="gray.300"
      borderColor="gray.700"
      spacing={["6", "8", "10"]}
      borderRightWidth={1}
    >
      <Icon as={BellIcon} />
      <Icon as={SettingsIcon} />
    </HStack>
  );
}
