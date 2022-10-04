import React, { FC } from 'react';

import { Container, Description, HashtagIcon, Separator, Title } from './styles';

const ChannelInfo: FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>general</Title>

      <Separator />

      <Description>The general chat</Description>
    </Container>
  );
}

export default ChannelInfo;
