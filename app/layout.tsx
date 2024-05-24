import '@mantine/core/styles.css';
import React from 'react';
import { ColorSchemeScript, type MantineTheme } from '@mantine/core';
import { theme } from '../theme';
import Providers from '@/components/Providers/Providers';
import AppWrapper from '@/components/AppWrapper/AppWrapper';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme={'dark'} forceColorScheme={'dark'} />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Providers theme={theme as unknown as MantineTheme}>
          <AppWrapper>{children}</AppWrapper>
        </Providers>
      </body>
    </html>
  );
}
