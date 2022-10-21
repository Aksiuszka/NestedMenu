import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'semi-bold',
    borderRadius: '10px',
    letterSpacing: '1.5px',
  },
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'purple.500',
      color: 'purple.500',
      padding: '5px 100px'
    },
    solid: {
      bgGradient: 'radial-gradient(circle at 30% 120%, #d971eb, #cb8ad9, #b8a3f7, #adb4ff);',
      color: 'white',
      _hover: {
        bgGradient: 'radial-gradient(circle at 30% 120%, #d971eb, #cb8ad9, #b8a3f7, #adb4ff);',
        color: 'white',
      },
      _active: {
        bgGradient: 'radial-gradient(circle at 30% 120%, #71d5eb, #8ad0d9, #b8a3f7, #adb4ff);',
        color: 'white',
      },
    },
  },
  defaultProps: {
    variant: 'outline',
  },
});
export default Button;
