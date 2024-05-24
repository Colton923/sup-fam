import { MantineProvider, type MantineTheme } from '@mantine/core';

interface IProviders {
  theme: MantineTheme;
  children: React.ReactNode;
}

const Providers = ({ theme, children }: IProviders) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
export default Providers;
