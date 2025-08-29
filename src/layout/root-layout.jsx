import React from 'react';
import UiHeader from './header';
import Footer from './footer'; 
import { Outlet } from 'react-router-dom';

const RootLayOut = () => {
  return (
    
    <div className="relative min-h-screen overflow-hidden">
      {/*  gradient background left corner */}
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px]"></div>

      {/* IF NEEDED LEFT SIDE EKE RADIENT ONAM THNAKA DA GANIMATA */}
      {/* <div className="absolute top-[250px] left-[500px] w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px]"></div> */}
      {/* <div className="absolute bottom-[100px] right-[50px] w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 rounded-full blur-[70px]"></div>  */}


      {/* Main content of your layout */}
      <div className="relative z-10"> {/* z-10 ensures content is above gradients */}
        <UiHeader />
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
};

export default RootLayOut;
