import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import background from '../img/apart.jpg';
import {Logo} from './basic/Logo';
import {Navbar} from './Navbar';
import {SearchBar} from './SearchBar';
import BasicBox from './basic/BasicBox';

const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-image: ${`url(${background})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DesktopHeader = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{height: '908px', width: '100%', overflow: 'hidden'}}>
      <HeaderContainer className={animate ? 'animate' : ''}>
        <Navbar />
        <BasicBox
          fullWidth
          justify='center'
          bottom='36px'
          style={{height: '314px'}}>
          <SearchBar />
        </BasicBox>
      </HeaderContainer>
    </div>
  );
};
