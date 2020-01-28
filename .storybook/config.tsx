import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { theme, globalCSS } from '../src/theme';

function loadStories() {
  req.keys().forEach(req);
}

const GlobalStyle = createGlobalStyle`
  ${globalCSS};
`;

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
));

const req = require.context('../src', true, /\.stories\.tsx$/);
configure(loadStories, module);
