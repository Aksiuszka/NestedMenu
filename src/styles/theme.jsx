import { extendTheme } from '@chakra-ui/react';
import Button from './components/Button';
import Text from './components/Text';

const theme = extendTheme({
  colors: {
    background: {
      primary: '#f7fafc',
    },
    text: {
      primary: '#202020',
      secondary: '#f7fafc',
      tertiary: '#ababab',
      accent: '#d481e0',
    },
  },
  components: {
    Button,
    Text,
  },
});
export default theme;
