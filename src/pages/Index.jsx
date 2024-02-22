import React, { useState } from "react";
import { Box, Button, Container, Heading, Text, VStack, Progress, useToast } from "@chakra-ui/react";
import { FaHammer, FaCoins } from "react-icons/fa";

const Index = () => {
  const [miningProgress, setMiningProgress] = useState(0);
  const [minedCoins, setMinedCoins] = useState(0);
  const toast = useToast();

  const mineCoin = () => {
    if (miningProgress < 100) {
      setMiningProgress(miningProgress + 10);
    } else {
      setMiningProgress(0);
      setMinedCoins(minedCoins + 1);
      toast({
        title: "Success!",
        description: "You've successfully mined a coin!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent>
      <VStack spacing={4} align="stretch">
        <Box textAlign="center" py={10}>
          <Heading>CryptoCoin Miner</Heading>
          <Text mt={2}>Mine your own CryptoCoins</Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md" mb={4}>
            Mining Status
          </Heading>
          <Progress value={miningProgress} size="lg" colorScheme="green" mb={4} />
          <Button leftIcon={<FaHammer />} colorScheme="teal" onClick={mineCoin}>
            Mine Coin
          </Button>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md" mb={4}>
            Wallet
          </Heading>
          <Text>
            <FaCoins /> Mined Coins: {minedCoins}
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
