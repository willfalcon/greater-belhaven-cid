import React from 'react';
import { ThemeProvider } from 'styled-components';

import '../../node_modules/normalize.css/normalize.css';

import theme from './theme';
import GlobalStyle from './GlobalStyle';
import { SiteContextProvider } from './SiteContext';

const Wrapper = ({ children }) => {
  return (
    <SiteContextProvider>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyle />
      </ThemeProvider>
    </SiteContextProvider>
  );
};

export default Wrapper;