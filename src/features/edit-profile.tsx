import {
  Box,
  Image,
  Input,
  Modal,
  ModalContent,
  Text,
  Textarea,
} from "@chakra-ui/react";
import coffee from "@/assets/status-bar/coffee-in-the-table.jpg";
import foto from "@/assets/status-bar/foto.jpg";
import ButtonActive from "@/components/button-active";
import close from "@/assets/close-circle.svg";

export default function EditProfile({ isOpen, onClose }: any) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent
        position="absolute"
        display="flex"
        zIndex={1}
        flexDirection="column"
        color="transparent"
        backgroundColor="card"
        width="80%"
        border="1px"
        px="20px"
        rounded="lg"
        top={10}>
        <Box display="flex" color="white" justifyContent="space-between">
          <Text fontSize="15px" py="10px">
            Edit Profile
          </Text>
          <Image cursor="pointer" onClick={onClose} src={close} />
        </Box>
        <Box position="relative" mb="50px">
          <Image
            rounded="lg"
            width="full"
            height="80px"
            objectFit="cover"
            src={coffee}
          />
          <Image
            rounded="full"
            color="card"
            border="4px"
            bottom="-35px"
            left="24px"
            position="absolute"
            objectFit="cover"
            boxSize="70px"
            src={foto}
          />
        </Box>
        <Box display="flex" color="secondary" gap="10px" flexDirection="column">
          <Box
            display="flex"
            rounded="lg"
            padding="10px"
            border="1px"
            flexDirection="column">
            <Text fontSize="10px" color="#B2B2B2">
              Name
            </Text>
            <Input
              color="white"
              fontSize="10px"
              variant="unstyled"
              placeholder="✨ Stella Audhina ✨"
            />
          </Box>
          <Box
            display="flex"
            rounded="lg"
            padding="10px"
            border="1px"
            flexDirection="column">
            <Text fontSize="10px" color="#B2B2B2">
              Username
            </Text>
            <Input
              color="white"
              fontSize="10px"
              variant="unstyled"
              placeholder="audhinafh"
            />
          </Box>
          <Box
            flex="flex"
            border="1px"
            padding="10px"
            rounded="lg"
            flexDirection="column">
            <Text fontSize="10px" color="#B2B2B2">
              Bio
            </Text>
            <Textarea
              fontSize="10px"
              color="white"
              py={0}
              placeholder="picked over by the worms, and weird fishes"
              variant="unstyled"></Textarea>
          </Box>
          <Box my="10px" display="flex" justifyContent="end">
            <ButtonActive text="Save" />
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  );
}
