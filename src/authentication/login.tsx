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

export default function Login() {
  return (
    <Box className="container" gap="20px" width={412}>
      <Box display="flex" width="100%">
        <Image src={logo} />
      </Box>
      <Text fontSize={28} width="100%" fontWeight={700} color="white">
        Login to Circle
      </Text>
      <FormControl
        color="white"
        display="flex"
        flexDirection="column"
        gap="12px">
        <Input
          height="48px"
          borderColor="secondary"
          placeholder="Email/Username"
        />
        <Input height="48px" borderColor="secondary" placeholder="Password" />
        <Box display="flex" justifyContent="end">
          <Link href="/forgot" color="white" fontWeight={500}>
            Forgot password
          </Link>
        </Box>
        <Button
          backgroundColor="primary.active"
          fontSize={20}
          fontWeight={700}
          height="44px"
          borderRadius={50}
          _hover={{ backgroundColor: "primary.disable" }}
          color={"white"}>
          Login
        </Button>
        <Box display="flex" gap={1} fontSize="14px">
          <Text fontWeight={500} color="white">
            Don't have account yet?
          </Text>
          <Link href="/register" fontWeight={700} color="primary.active">
            Create account
          </Link>
        </Box>
      </FormControl>
    </Box>
  );
}
