import React, { FC } from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserOptions {
  displayName: string;
  isBot?: boolean;
}

const UserRow: FC<UserOptions> = ({ displayName, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{displayName}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: FC = () => {
  return (
    <Container>
      <Role>Online - 1</Role>
      <UserRow displayName="Rohit" />

      <Role>Offline - 10</Role>
      <UserRow displayName="Rohit 1" isBot />
      <UserRow displayName="Aman" />
      <UserRow displayName="Rohan" />
      <UserRow displayName="Rohit 2" isBot />
      <UserRow displayName="Dipayan" />
      <UserRow displayName="Suraj" />
      <UserRow displayName="Vivek" />
      <UserRow displayName="Rohit 3" isBot />
      <UserRow displayName="Sahil" />
      <UserRow displayName="Harpreet" />
    </Container>
  );
};

export default UserList;
