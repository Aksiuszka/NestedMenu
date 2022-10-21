//import Navigation from './Navigation';
import { Grid } from '@chakra-ui/react';
function Layout({ children }) {
  return (
    <>
      {/* <Navigation /> */}
      <Grid templateColumns="repeat(2, 1fr)" px="80px" gap={9}>
        {children}
      </Grid>
    </>
  );
}

export default Layout;
