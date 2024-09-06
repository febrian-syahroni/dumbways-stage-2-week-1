import Avatar from "@/components/avatar";
import { Box, Image, Modal, ModalContent, Textarea } from "@chakra-ui/react";
import gallery from "@/assets/content/gallery.svg";
import { useState } from "react";
import ButtonActive from "@/components/button-active";
import ButtonDisabled from "@/components/button-disabled";
import close from "@/assets/close-circle.svg";

export default function PopupUpdateStatus({ isOpen, onClose }: any) {
  const [value, setValue] = useState<string>("");

  function handleInput(e: { target: { value: string } }) {
    let inputValue = e.target.value;
    setValue(inputValue);
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent
        position="absolute"
        backgroundColor="card"
        color="transparent"
        zIndex={1}
        width="500px"
        height="auto"
        border="1px"
        rounded="lg"
        px="10px"
        left="30%"
        top={3}
        display="flex"
        flexDirection="column">
        <Box display="flex" justifyContent="end" mt="10px">
          <Image onClick={onClose} cursor="pointer" src={close} />
        </Box>
        <Box
          color="secondary"
          padding="10px"
          borderBottom="1px"
          gap="15px"
          position="relative"
          display="flex">
          <Avatar />
          <Textarea
            onChange={handleInput}
            py="5px"
            height="100%"
            variant="unstyled"
            fontSize="14px"
            color="white"
            placeholder="What is happening?!"
            border="transparent"></Textarea>
        </Box>
        <Box
          display="flex"
          padding="10px"
          justifyContent="space-between"
          alignItems="center">
          <Image cursor="pointer" src={gallery} />
          {value ? <ButtonActive /> : <ButtonDisabled />}
        </Box>
      </ModalContent>
    </Modal>
  );
}
