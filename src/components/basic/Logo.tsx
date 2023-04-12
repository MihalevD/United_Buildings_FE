import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import logo from '../../img/logo.png';
import {ImageContainer} from './ImageContainer';

const LogoBox = styled.div`
  width: 436px;
  height: 76px;
  position: relative;
  padding-left: 140px;
`;

export const Logo = () => {
  return (
    <LogoBox>
      <ImageContainer
        imageSrc={logo}
        imageStyles={{height: '100%', width: '100%'}}></ImageContainer>
    </LogoBox>
  );
};
