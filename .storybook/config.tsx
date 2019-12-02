import React from 'react';
import { ThemeProvider } from 'styled-components';
import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { theme } from '../src/theme';

function loadStories() {
  req.keys().forEach(req);
}

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

const req = require.context('../src', true, /\.stories\.tsx$/);
configure(loadStories, module);
