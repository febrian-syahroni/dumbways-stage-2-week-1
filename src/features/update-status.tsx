import { Box, Button, Image, Text, useDisclosure } from "@chakra-ui/react";
import photo from "@/assets/status-bar/foto.jpg";
import gallery from "@/assets/content/gallery.svg";
import PopupUpdateStatus from "./popup-update-status";

interface desc {
  placeholder: string;
  button: string;
}

export default function UpdateStatus({ button }: desc) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      display="flex"
      padding="20px"
      alignItems="center"
      justifyContent="space-between">
      <Box position="relative" display="flex" alignItems="center">
        <Image rounded="full" objectFit="cover" boxSize="30px" src={photo} />
        <Text
          onClick={onOpen}
          color="gray"
          cursor="pointer"
          px="20px"
          border="transparent">
          What is happening?!
        </Text>
        <PopupUpdateStatus isOpen={isOpen} onClose={onClose} />
      </Box>
      <Box display="flex" alignItems="center" gap="20px">
        <Image onClick={onOpen} cursor="pointer" src={gallery} />
        <Button
          isDisabled
          rounded="full"
          fontSize="15px"
          height="fit-content"
          bg="primary.disable"
          _hover={{ bg: "primary.disable" }}
          py="5px"
          color="#909090">
          {button}
        </Button>
      </Box>
    </Box>
  );
}
