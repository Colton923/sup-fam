import { Title, Text } from '@mantine/core';
import classes from './Logo.module.css';

export default function Logo() {
  return (
    <Title className={classes.title} ta="center">
      Sup{' '}
      <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
        Fam
      </Text>
    </Title>
  );
}
