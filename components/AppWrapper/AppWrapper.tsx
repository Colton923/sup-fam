import { AppShell, AppShellFooter, AppShellHeader, AppShellMain, Flex, Text } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import Logo from '../Logo/Logo';
import classes from './AppWrapper.module.css';

interface IAppWrapper {
  children: React.ReactNode;
}

export default function AppWrapper({ children }: IAppWrapper) {
  return (
    <AppShell
      h={'100vh'}
      w={'100vw'}
      style={{
        margin: '0',
        padding: '0',
        overflow: 'hidden',
      }}
    >
      <AppShellHeader style={{ textAlign: 'center' }} pos={'fixed'}>
        <Flex dir={'column'} justify={'space-evenly'} align={'center'}>
          <Flex justify="space-between" align="center" dir="row" w={'100vw'} h={'10vh'}>
            <Flex p={'xs'}>
              <Logo />
            </Flex>
            <Flex p={'xs'} justify={'center'} align={'center'} h={'100%'}>
              <ColorSchemeToggle />
            </Flex>
          </Flex>
        </Flex>
      </AppShellHeader>
      <AppShellMain h={'80vh'} w={'100vw'}>
        <Flex
          justify={'center'}
          align={'center'}
          h={'100%'}
          dir="row"
          wrap={'wrap'}
          p={'xs'}
          gap={'xs'}
          className={classes.mainFlex}
        >
          {children}
        </Flex>
      </AppShellMain>
      <AppShellFooter style={{ textAlign: 'center' }} w={'100vw'} h={'10vh'}>
        <Flex justify={'center'} align={'center'} h={'100%'}>
          <Text size={'xs'}>
            Made with ☕ by <a href="coltonmcclintock.com">me</a>.
          </Text>
        </Flex>
      </AppShellFooter>
    </AppShell>
  );
}
