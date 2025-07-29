import React from 'react';
import {isMobile} from 'react-device-detect';

const Title = ({ text }) => {


    const TitleStyle = {
        textColor: 'white',
        color: 'white',
        fontFamily: 'Raleway',
        fontWeight: 500,
        lineHeight: 1.2
    }
    if(isMobile) {

    return (
        <div class="w-[100%] h-8 bg-[rgb(0,122,255)] flex mt-10 justify-center items-center mb-8" style={TitleStyle}>
            <h1 class="mx-auto">{text}</h1>
        </div>
    );
};
    return (
        <div class="w-[90%] h-8 bg-[rgb(0,122,255)] flex mt-10 mx-auto justify-center items-center mb-5" style={TitleStyle}>
            <h1 class="mx-auto">{text}</h1>
        </div>
    );
};

export default Title;