import React from 'react';
import { Outlet } from 'react-router-dom';
import style from './Layout.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Layout() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.content}>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
