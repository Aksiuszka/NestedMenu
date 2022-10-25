import { Flex, Box } from '@chakra-ui/react';


function StyledImage({children}) {
  return (
    <Flex
      bg="white"
      h="100%"
      display="flex"
      justify="center"
      direction="column"
      alignItems="center">
      <Box boxSize="sm">
        {children}
      </Box>
    </Flex>
  );
}

export default StyledImage;
