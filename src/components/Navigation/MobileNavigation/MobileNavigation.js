import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'components/UI/HamburgerMenu';
import NavigationItems from '../NavigationItems/NavigationItems';
import { ContentWrapper, LogoStyled, Menu, MobileNavWrapper } from './style';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MobileNavWrapper>
      <ContentWrapper isOpen={isOpen}>
        <HamburgerMenu isOpen={isOpen} clickedFn={toggleOpen} />
        <Link to="/">
          <LogoStyled />
        </Link>
        <Menu isOpen={isOpen} />
      </ContentWrapper>
      <NavigationItems isOpen={isOpen} closeFn={toggleOpen} />
    </MobileNavWrapper>
  );
};

export default MobileNavigation;
