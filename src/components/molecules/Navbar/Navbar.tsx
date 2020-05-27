import React, { FC } from 'react';
import { BoxProps } from '../../quarks';
import { NavbarOuter, NavbarLogo, NavbarItem, NavbarContainer } from './Navbar.components';

export const Navbar: TNavbar = props => {
  return <NavbarOuter {...props} />;
};

Navbar.Logo = NavbarLogo;
Navbar.Item = NavbarItem;
Navbar.Container = NavbarContainer;

type TNavbar = FC<BoxProps> & {
  Logo: typeof NavbarLogo;
  Item: typeof NavbarItem;
  Container: typeof NavbarContainer;
};
