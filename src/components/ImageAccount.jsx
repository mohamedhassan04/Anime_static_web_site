import React from 'react';
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

const ImageAccount = () => {
  return (
    <>
      <Wrap zIndex={'overlay'} pos={'fixed'} top={'4'} right={'32'} p={'0'}>
        <WrapItem>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </WrapItem>
      </Wrap>
    </>
  );
};

export default ImageAccount;
