import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import background from '../img/apart.jpg';
import {Logo} from './basic/Logo';
import {Navbar} from './Navbar';
import {SearchBar} from './SearchBar';
import BasicBox from './basic/BasicBox';
import {FilterType} from '../config/types';

const HeaderContainer = styled.div`
  min-height: 100%;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-image: ${`url(${background})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

type DesktopHeaderProps = {
  setFilters: (filters: FilterType) => void;
};

export const DesktopHeader = (props: DesktopHeaderProps) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        maxHeight: '724px',
        height: '58vh',
        width: '100%',
        overflow: 'hidden',
      }}>
      <HeaderContainer className={animate ? 'animate' : ''}>
        <Navbar />
        <BasicBox fullWidth justify='center'>
          <SearchBar setFilters={props.setFilters} />
        </BasicBox>
      </HeaderContainer>
    </div>
  );
};
