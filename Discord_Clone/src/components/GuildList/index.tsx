import React, { FC } from 'react';

import GuildButton from '../GuildButton';

import { Container, Separator } from './styles';

const GuildList: FC = () => {
  return (
    <Container>
      <GuildButton isHome />

      <Separator />

      <GuildButton />
      <GuildButton hasNotifications />
      <GuildButton mentions={6} />
      <GuildButton />
      <GuildButton />
      <GuildButton />
      <GuildButton hasNotifications />
      <GuildButton />
      <GuildButton mentions={3} />
      <GuildButton />
    </Container>
  );
};

export default GuildList;
