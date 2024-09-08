import { Button } from "@chakra-ui/react";

interface desc {
  text?: string;
}

export default function ButtonActive({ text }: desc) {
  return (
    <Button
      rounded="full"
      fontSize="15px"
      height="fit-content"
      bg="primary.active"
      _hover={{ bg: "primary.disable" }}
      py="5px"
      color="white">
      {text}
    </Button>
  );
}
