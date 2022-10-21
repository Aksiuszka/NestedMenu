import { Flex, Box, Image } from '@chakra-ui/react';
import Main from '../../assets/pic1.png';

function StyledImage() {
  return (
    <Flex
      bg="white"
      h="100%"
      display="flex"
      justify="center"
      direction="column"
      alignItems="center">
      <Box boxSize="sm">
        <Image src={Main} alt="notebook" />
      </Box>
    </Flex>
  );
}

export default StyledImage;
