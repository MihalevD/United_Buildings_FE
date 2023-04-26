import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import background from '../img/apart.jpg';
import {Logo} from './basic/Logo';
import {Navbar} from './Navbar';
import {SearchBar} from './SearchBar';
import BasicBox from './basic/BasicBox';
import {FilterType} from '../config/types';
import {useIsPropertyPage} from '../helper/isPropertyPage';

const HeaderContainer = styled.div<{$isPropPage: boolean}>`
  min-height: 100%;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-image: ${({$isPropPage}) =>
    $isPropPage ? 'none' : `url(${background})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

type DesktopHeaderProps = {
  setFilters: (filters: FilterType) => void;
};

export const DesktopHeader = (props: DesktopHeaderProps) => {
  const [animate, setAnimate] = useState(false);
  const isProductPage = useIsPropertyPage();

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
        height: isProductPage ? '100%' : '58vh',
        width: '100%',
        overflow: 'hidden',
      }}>
      <HeaderContainer
        className={animate ? 'animate' : ''}
        $isPropPage={isProductPage}>
        <Navbar />
        {!isProductPage && (
          <BasicBox fullWidth justify='center'>
            <SearchBar setFilters={props.setFilters} />
          </BasicBox>
        )}
      </HeaderContainer>
    </div>
  );
};
