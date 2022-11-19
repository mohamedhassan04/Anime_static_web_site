import { ColorModeScript, ChakraProvider, theme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';
import { store } from '../src/redux/store';
import { Provider } from 'react-redux';

import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      <AlertProvider template={AlertTemplate} {...options}>
        <Provider store={store}>
          <App />
        </Provider>
      </AlertProvider>
    </ChakraProvider>
  </StrictMode>
);
