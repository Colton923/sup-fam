'use client';
import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { IconPrismLight, IconSpyOff } from '@tabler/icons-react';

export function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <Group justify="center">
      {colorScheme === 'dark' && (
        <Button c={'yellow'} color={'blue'} onClick={() => setColorScheme('light')}>
          <IconPrismLight size={'24px'} />
        </Button>
      )}
      {colorScheme === 'light' && (
        <Button c={'gray'} color={'dark'} onClick={() => setColorScheme('dark')}>
          <IconSpyOff size={'24px'} />
        </Button>
      )}
    </Group>
  );
}
