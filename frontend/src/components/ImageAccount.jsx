import React from 'react';
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

const ImageAccount = () => {
  return (
    <>
      <Menu>
        <MenuButton
          zIndex={'overlay'}
          pos={'fixed'}
          top={'4'}
          right={'32'}
          p={'0'}
          as={Button}
          borderRadius={'100%'}
        >
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            <MenuItem>My Profile</MenuItem>
            <MenuDivider />
            <MenuItem>Logout </MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </>
  );
};

export default ImageAccount;
