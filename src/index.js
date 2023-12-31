import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

import {Provider} from "react-redux"
import store from './redux/store';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <Provider store={store}>
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode>
  </Provider>,
  container
);

