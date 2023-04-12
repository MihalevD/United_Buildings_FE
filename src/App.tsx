import React from 'react';
import './App.css';
import {Footer} from './components/Footer';
import {DesktopHeader} from './components/DesktopHeader';
import Router from './components/basic/Router';
import useIsMobile from './helper/isMobile';
import {MobileHeader} from './components/MobileHeader';
import BasicBox from './components/basic/BasicBox';

function App() {
  const isMobile = useIsMobile();
  return (
    <BasicBox fullWidth fullHeight direction='column'>
      {isMobile ? <MobileHeader /> : <DesktopHeader />}
      <Router />
      <Footer />
    </BasicBox>
  );
}

export default App;
