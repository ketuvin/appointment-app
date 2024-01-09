import React from 'react';
import SideNav from '../components/SideNav';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-grow p-8 ml-64">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
