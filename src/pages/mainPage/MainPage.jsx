import React from 'react';
import { 
  Outlet,
} from 'react-router-dom';
import Header from '../../components/header/Header';

const MainPage = () => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
};

export default MainPage;