import { Grid, Text, Flex } from '@chakra-ui/react';
function Hero({ children }) {
  return (
    <Flex
      bg="white"
      h="100%"
      display="flex"
      justify="center"
      direction="column"
      alignItems="center">
      <Text variant="display">Lorem, ipsum & go</Text>
      <Text m="-40px" variant="accent">
        Interact!
      </Text>
      <Grid w="100%" py="50px" templateColumns="repeat(2, 1fr)" gap={10}>
        {children}
      </Grid>
    </Flex>
  );
}

export default Hero;
