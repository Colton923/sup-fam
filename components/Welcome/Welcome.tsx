import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center">
        Sup{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Fam
        </Text>
      </Title>
      <span>
        <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto">
          This project is to have a central place for a calendar, pictures, and memories for a more
          intimate social media experience. Get started here and {''}
          <Anchor href="/join" size="lg">
            invite
          </Anchor>{' '}
          the family. If you already have an invite code, or are just checking out the site see our
          links above, or {''}
          <Anchor href="/return" size="lg">
            login here
          </Anchor>
          {'.'}
        </Text>
      </span>
    </>
  );
}
