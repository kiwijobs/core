import React, { FC, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

export const TestProviders: FC<{}> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback="mocked loading...">{children}</Suspense>
    </ThemeProvider>
  );
};

export const wrapper = TestProviders; // React Testing Library friendly name.
