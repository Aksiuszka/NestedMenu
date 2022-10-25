import { GridItem, Image, Button } from '@chakra-ui/react';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import StyledImage from '../../components/Image';
import Main from '../../assets/pic1.png';
function Home() {
  return (
    <Layout>
      <GridItem w="100%" h="calc(100vh)">
        <Hero>
          <Button size="md" variant="solid">
            See what's here
          </Button>
          <Button variant="outline">See what's not</Button>
        </Hero>
      </GridItem>
      <GridItem w="100%" h="calc(100vh)">
        <StyledImage>
          <Image src={Main} alt="notebook" />
        </StyledImage>
      </GridItem>
    </Layout>
  );
}

export default Home;
