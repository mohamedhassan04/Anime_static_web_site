import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <Container>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={8}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading alignSelf={'center'}>Welcome Back</Heading>
          <Input
            placeholder={'Enter your email'}
            type={'email'}
            required
            focusBorderColor={'orange.500'}
          />
          <Input
            placeholder={'Enter your password'}
            type={'password'}
            required
            focusBorderColor={'orange.500'}
          />
          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>
          <Button colorScheme={'orange'} type={'submit'}>
            Log In
          </Button>
          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme={'orange'}>
              <Link to={'/register'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SignIn;
