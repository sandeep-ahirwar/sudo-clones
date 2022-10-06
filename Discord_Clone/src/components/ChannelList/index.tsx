import React, { FC } from 'react';

import ChannelButton from '../ChannelButton';

import { Category, Container, CreateChannelIcon } from './styles';

const ChannelList: FC = () => {
  return (
    <Container>
      <Category>
        <span>Text Channels</span>
        <CreateChannelIcon />
      </Category>

      <ChannelButton channelName="general" />
      <ChannelButton channelName="commands" />
      <ChannelButton channelName="announcements" />
      <ChannelButton channelName="stuff" />
      <ChannelButton channelName="things" />
    </Container>
  );
}

export default ChannelList;
