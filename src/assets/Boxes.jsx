import React, { useState, useEffect } from 'react';
import Ski from "./ski.jpg"

import {isMobile} from 'react-device-detect';

const BoxTwo = () => {

    const titleStyle = {
        fontFamily: 'Raleway',
        fontWeight: 500,
        fontSize: '1.5rem',
        lineHeight: '1.2',
        color: 'black',

    };

    const textStyle = {
      fontFamily: 'Raleway',
      color: 'black',
    }

  if(isMobile) {
    return (
      
      <div class="h-[100%] w-full flex flex-col absolute inset-0 items-center">
        <h1 class="mx-auto font-bold mt-10" style={titleStyle}>Tom Williams</h1>
        <img src={Ski} class="h-[50%] mx-auto flex rounded-full mt-5"/>
        <br />
        <p class="text-black" style={textStyle}>Computer Science</p>
        <p class="text-black" style={textStyle}>University of Bath</p>



      </div>
    )
  }

  return (

    <div className="bg-black text-white w-[100%] h-[100%] flex">
   
        <div class="bg-white h-[100%] flex-1 w-[50%]">
        <br />
        <div class="mt-10" style={titleStyle}>Tom Williams</div>
        <br />
        <img src={Ski} class="h-[40%] mx-auto flex rounded-full"></img>
        <br />
        <p class="text-black" style={textStyle}>Computer Science at University of Bath</p>


        </div>

        <div class="bg-[rgb(245,245,247)] w-[50%] flex-1 h-[100%]">
        <br />
        <h1 style={titleStyle} class="mt-10">About Me</h1>
        <p style={textStyle} class="text-sm p-3 ml-16 mr-16">Hi, I'm Tom. I have spent the last 7 years of my life slowly progressing in the world of computer science. Having started with Python, I have since dabbled in all sorts of languages including Arduino for some sketchy mechatronics, Javascript for websites as such and others which have been long forgotten.</p>
        <p style={textStyle} class="text-sm p-3 ml-16 mr-16">Aside from programming, I spend the majority of my time playing rugby for my local club and tennis where the weather allows.</p>
        </div>
    
    </div>
  );
};




export { BoxTwo } ;
