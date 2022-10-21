import { defineStyleConfig } from '@chakra-ui/react';

const Text = defineStyleConfig({
  baseStyle: {
    color: '#202020',
  },

  variants: {
    display: {
      fontFamily: 'Mochiy Pop One',
      fontSize: '3xl',
      zIndex: '10',
    },
    accent: {
      fontFamily: 'WindSong',
      fontSize: '9xl',
      color: '#d481e0',
    },
    paragraph: {
      fontFamily: 'Mochiy Pop One',
      fontSize: 'sm',
    },
  },

  defaultProps: {
    variant: 'paragraph',
  },
});
export default Text;
