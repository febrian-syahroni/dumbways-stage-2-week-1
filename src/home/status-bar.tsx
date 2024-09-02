import { Box, Button, Image, Text } from "@chakra-ui/react";
import coffe from "@/assets/status-bar/coffee-in-the-table.jpg";
import foto from "@/assets/status-bar/foto.jpg";
import avatar from "@/assets/status-bar/avatar.svg";

export default function StatusBar() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      color="white"
      alignItems="start"
      gap="16px"
      padding="40px"
      width="563px"
      height="1117px"
      backgroundColor="background">
      <Box
        display="flex"
        p="24px"
        rounded="lg"
        flexDirection="column"
        gap="12px"
        width="full"
        backgroundColor="card">
        <Text lineHeight={1} fontSize="20px" fontWeight="700">
          My Profile
        </Text>
        <Box position="relative">
          <Box position="relative" rounded="lg" overflow="hidden" height="70px">
            <Image position="absolute" bottom={-6} src={coffe} />
          </Box>
          <Box
            position="absolute"
            display="flex"
            top="24px"
            left="24px"
            border="4px"
            borderColor="background"
            width="80px"
            height="80px"
            rounded="full"
            overflow="hidden">
            <Image src={foto} />
          </Box>
        </Box>
        <Box display="flex" justifyContent="end">
          <Button
            fontSize="14px"
            backgroundColor="card"
            color="white"
            _hover={{ color: "black", backgroundColor: "white" }}
            border="1px"
            borderColor="white"
            fontWeight="700"
            h="33px"
            rounded="full">
            Edit Profile
          </Button>
        </Box>
        <Box
          display="flex"
          backgroundColor="card"
          rounded="lg"
          gap="4px"
          w="full"
          flexDirection="column"
          alignItems="start"
          justifyContent="start">
          <Text>✨ Stella Audhina ✨</Text>
          <Text fontSize="14px" fontWeight="400" color="#909090">
            @audhinafh
          </Text>
          <Text fontSize="16px" fontWeight="400">
            picked over by the worms, and weird fishes
          </Text>
          <Box display="flex" fontSize="16px" gap="12px">
            <Box display="flex" gap="4px">
              <Text color="white" fontWeight="700">
                291
              </Text>
              <Text color="#909090" fontWeight="400">
                Following
              </Text>
            </Box>
            <Box display="flex" gap="4px">
              <Text color="white" fontWeight="700">
                23
              </Text>
              <Text color="#909090" fontWeight="400">
                Followers
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        padding="24px"
        rounded="lg"
        width="full"
        backgroundColor="card">
        <Text fontWeight="700" fontSize="20px">
          Suggested for you
        </Text>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="10px"
          gap="16px">
          <Image src={avatar} />
          <Box
            fontSize="10px"
            width="full"
            display="flex"
            flexDirection="column">
            <Text>Mohammed Jawahir</Text>
            <Text color="#909090">@em.jawahir</Text>
          </Box>
          <Button
            fontSize="10px"
            height="30px"
            rounded="full"
            _hover={{ backgroundColor: "white", color: "black" }}
            px="30px"
            color="white"
            border="1px"
            backgroundColor="card">
            Follow
          </Button>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="10px"
          gap="16px">
          <Image src={avatar} />
          <Box
            fontSize="10px"
            width="full"
            display="flex"
            flexDirection="column">
            <Text>Mohammed Jawahir</Text>
            <Text color="#909090">@em.jawahir</Text>
          </Box>
          <Button
            fontSize="10px"
            height="30px"
            rounded="full"
            _hover={{ backgroundColor: "white", color: "black" }}
            px="30px"
            color="white"
            border="1px"
            backgroundColor="card">
            Follow
          </Button>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="10px"
          gap="16px">
          <Image src={avatar} />
          <Box
            fontSize="10px"
            width="full"
            display="flex"
            flexDirection="column">
            <Text>Mohammed Jawahir</Text>
            <Text color="#909090">@em.jawahir</Text>
          </Box>
          <Button
            fontSize="10px"
            height="30px"
            rounded="full"
            _hover={{ backgroundColor: "white", color: "black" }}
            px="30px"
            color="white"
            border="1px"
            backgroundColor="card">
            Follow
          </Button>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding="10px"
          gap="16px">
          <Image src={avatar} />
          <Box
            fontSize="10px"
            width="full"
            display="flex"
            flexDirection="column">
            <Text>Mohammed Jawahir</Text>
            <Text color="#909090">@em.jawahir</Text>
          </Box>
          <Button
            fontSize="10px"
            height="30px"
            rounded="full"
            _hover={{ backgroundColor: "white", color: "black" }}
            px="30px"
            color="white"
            border="1px"
            backgroundColor="card">
            Follow
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
