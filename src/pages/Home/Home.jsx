import { Grid, GridItem, Button, Text, Flex, Box, Image } from '@chakra-ui/react';
import main from '../../assets/pic1.png';
function Home() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" px='80px' gap={9}>
      <GridItem w="100%" h="calc(100vh)">
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
          <Grid w="100%"  py='50px' templateColumns="repeat(2, 1fr)" gap={10}>
            <Button size='md' variant="solid">See what's here</Button>
            <Button variant="outline">See what's not</Button>
          </Grid>
        </Flex>
      </GridItem>
      <GridItem w="100%" h="calc(100vh)">
        <Flex
          bg="white"
          h="100%"
          display="flex"
          justify="center"
          direction="column"
          alignItems="center">
          <Box boxSize="sm">
            <Image src={main} alt="notebook" />
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default Home;
