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

export default function Reset() {
  return (
    <Box className="container" gap="20px" width={412}>
      <Box display="flex" width="100%">
        <Image src={logo} />
      </Box>
      <Text fontSize={28} width="100%" fontWeight={700} color="white">
        Reset password
      </Text>
      <FormControl
        color="white"
        display="flex"
        flexDirection="column"
        gap="12px">
        <Input
          height="48px"
          borderColor="secondary"
          placeholder="New Password"
        />
        <Input
          height="48px"
          borderColor="secondary"
          placeholder="Confirm New Password"
        />
        <Button
          backgroundColor="primary.active"
          fontSize={20}
          fontWeight={700}
          height="44px"
          _hover={{ backgroundColor: "primary.disable" }}
          borderRadius={50}
          color={"white"}>
          Create New Password
        </Button>
        <Box display="flex" gap={1} fontSize="14px">
          <Text fontWeight={500} color="white">
            Already have account?
          </Text>
          <Link fontWeight={700} color="primary.active">
            Login
          </Link>
        </Box>
      </FormControl>
    </Box>
  );
}
