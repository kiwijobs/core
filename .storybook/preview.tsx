import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { addDecorator, addParameters } from '@storybook/react';

import { theme, globalCSS } from '../src/theme';

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'responsive',
  },
});

const GlobalStyle = createGlobalStyle`
  ${globalCSS};
`;

const storyWrapper = story => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
);

addDecorator(storyWrapper);
