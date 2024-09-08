import {
  Box,
  Button,
  FormControl,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import logo from "@/assets/logo.png";

export default function Forgot() {
  return (
    <Box className="container" gap="20px" width={412}>
      <Box display="flex" width="100%">
        <Image src={logo} />
      </Box>
      <Text fontSize={28} width="100%" fontWeight={700} color="white">
        Forgot password
      </Text>
      <FormControl
        color="white"
        display="flex"
        flexDirection="column"
        gap="12px">
        <Input height="48px" borderColor="secondary" placeholder="Full Name" />
        <Button
          backgroundColor="primary.active"
          fontSize={20}
          fontWeight={700}
          height="44px"
          _hover={{ backgroundColor: "primary.disable" }}
          borderRadius={50}
          color={"white"}>
          Send Instruction
        </Button>
        <Box display="flex" gap={1} fontSize="14px">
          <Text fontWeight={500} color="white">
            Already have account?
          </Text>
          <Link href="/login" fontWeight={700} color="primary.active">
            Login
          </Link>
        </Box>
      </FormControl>
    </Box>
  );
}
