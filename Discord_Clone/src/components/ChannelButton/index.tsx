import React, { FC } from 'react';

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

export interface ChannelButtonOptions {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: FC<ChannelButtonOptions> = ({
  channelName,
  selected,
}) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashtagIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButton;
