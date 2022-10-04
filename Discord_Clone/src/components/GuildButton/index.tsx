import React, { FC } from 'react';

import { Button } from './styles';

import logo from '../../assets/logo.png'

export interface ButtonOptions {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: FC<ButtonOptions> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={logo} alt="Rohit" />}
    </Button>
  );
};

export default ServerButton;
