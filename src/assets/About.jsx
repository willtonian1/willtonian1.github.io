import React from 'react';
import {isMobile} from 'react-device-detect';
import Rugby from "./rugby.jpg"

const About = () => {

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
        <div id="about" className="relative flex-col items-center h-[100%] p-0 z-20">
          <h1 style={titleStyle} class="mt-12 mx-auto">About Me</h1>
          <br />
          <p class="text-sm mx-auto p-3" style={textStyle}>Hi, I'm Tom. I have spent the last 7 years of my life slowly progressing through the world of computer science. Having started with Python, I have since dabbled in all sorts of languages including Arduino for some sketchy mechatronics, Javascript for websites as such and others which have been long forgotten.</p>
          <p class="text-sm mx-auto p-3" style={textStyle}>Aside from programming, I spend the majority of my time playing rugby for my local club and tennis where the weather allows.</p>
          <img src={Rugby} class="p-5"></img>
        </div>      
      )
    }


    return (
      <div class="h-[0%] w-[0%]"></div>
    );
  };
  
  export default About;
  
  
  