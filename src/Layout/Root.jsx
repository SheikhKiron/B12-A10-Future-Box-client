import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
  return (
    <div>
      <header className="shadow-sm">
        <Navbar></Navbar>
      </header>
      <main className="w-11/12 mx-auto min-h-[calc(100vh-440px)]">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;