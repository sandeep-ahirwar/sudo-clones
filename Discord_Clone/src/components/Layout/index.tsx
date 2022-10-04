import React, { FC } from 'react';

import { Grid } from './styles';

import GuildList from '../GuildList';
import GuildName from '../GuildName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChannelData from '../ChannelData';

const Layout: FC = () => {
  return (
    <Grid>
      <GuildList />
      <GuildName />
      <ChannelInfo />
      <ChannelList />
      <UserInfo />
      <ChannelData />
      <UserList />
    </Grid>
  );
};

export default Layout;
