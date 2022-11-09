import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
          <Heading alignSelf={'center'}>SHOT ANIME</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder={'Enter your name'}
            type={'text'}
            required
            focusBorderColor={'orange.500'}
          />
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
          <Button colorScheme={'orange'} type={'submit'}>
            Sign Up
          </Button>
          <Text textAlign={'right'}>
            Already Sign Up?{' '}
            <Button variant={'link'} colorScheme={'orange'}>
              <Link to={'/login'}>Sign In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
