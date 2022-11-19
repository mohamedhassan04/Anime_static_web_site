import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { userRegister } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const dispatch = useDispatch();
  /**State for register user */
  const [register, setregister] = useState({
    name: '',
    email: '',
    password: '',
  });
  /** Function to register user with redux */
  const handleRegister = e => {
    e.preventDefault();
    dispatch(userRegister(register));
  };
  return (
    <Container>
      <form onSubmit={handleRegister}>
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
            onChange={e => setregister({ ...register, name: e.target.value })}
          />
          <Input
            placeholder={'Enter your email'}
            type={'email'}
            required
            focusBorderColor={'orange.500'}
            onChange={e => setregister({ ...register, email: e.target.value })}
          />
          <Input
            placeholder={'Enter your password'}
            type={'password'}
            required
            focusBorderColor={'orange.500'}
            onChange={e =>
              setregister({ ...register, password: e.target.value })
            }
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
