import React from 'react';
import {isMobile} from 'react-device-detect';
import Coach from './coachrouting.pdf'
import f1 from './f1draft.pdf'
import DDominance from './Redefining_Dominance_Tom_Williams.pdf'

const Projects = () => {

    const Projects = {

    }

    const ButtonStyle = {
        fontFamily: 'Raleway',
        textColour: 'white',

    }

    const textStyle = {
        fontFamily: 'Raleway',
        fontWeight: 500,
        lineHeight: 1.2,
        color: 'white'
    }
    
    const textStyle2 = {
        fontFamily: 'Raleway',
        fontWeight: 500,
        lineHeight: 1.2,
        color: 'black'
    }

    const boxStyle={
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
    }

    if(isMobile) {
        return (
            <div class="w-[100%] flex-col">
                <div class="h-64 w-[100%] relative">
                    <div class="absolute top-0 left-0 w-[8%] h-64 -z-10 bg-[rgb(0,122,255)]"></div>
                    <div class="absolute top-0 right-0 w-[92%] h-64 -z-10 bg-black"></div>

                    <div class="ml-[8%]">

                        <br />
                        <h1 style={textStyle} class="text-white font-bold">Genetic Algorithm Routing</h1>
                        <div class="h-[60%]">
                            
                            <p style={textStyle} class="text-xs mt-2 font-extralight">Python</p>
                            <p style={textStyle} class="text-sm mt-5 pr-4 pl-4">Over the course of 6 months I worked on a solo project based around the problem surrounding organising coach networks, and specifically allocating students based on their locations to specific school routes, primarily using my own custom genetic algorithm.</p>
                            <a href={Coach} target="_blank" class="flex z-50 w-20 text-sm p-1 mx-auto mt-4 w-[60%] text-white bg-[rgb(0,122,255)] rounded-2xl" style={ButtonStyle}>In-Depth</a>

                        </div>
                        
                    </div>

                </div>


                <br />
                                
                <div class="h-64 w-[100%] relative">
                <div class="absolute top-0 left-0 w-[8%] h-64 -z-10 bg-[rgb(255,198,39)]"></div>

                    <div class="absolute top-0 right-0 w-[92%] h-64 -z-10 bg-black">
                    

                    </div>

                    <div class="ml-[8%]">
                        <br />
                        <h1 style={textStyle} class="text-white font-bold">Redefining Dominance - Data Science</h1>
                        <div class="h-[60%]">
                            
                            <p style={textStyle} class="text-xs mt-2 font-extralight">Python, Numpy, MatPlotLib</p>
                            <p style={textStyle} class="text-sm mt-5 pr-4 pl-4">This article highlights the achievements and gives an overview of the style and success of NBA superstar Nikola Jokic. The report includes statistical analysis and modelling, machine learning techniques and more.</p>

                        </div>

                        <a href={DDominance} target="_blank" class="flex w-20 z-50 text-sm p-1 mx-auto mt-4 w-[60%] text-white bg-[rgb(255,198,39)] rounded-2xl" style={ButtonStyle}>Read Article</a>
                    </div>

                    

                </div>

                <br />

                <div class="h-64 w-[100%] relative">
                <div class="absolute top-0 left-0 w-[8%] h-64 -z-10 bg-[rgb(0,122,255)]"></div>

                    <div class="absolute top-0 right-0 w-[92%] h-64 -z-10 bg-black">
                    

                    </div>

                    <div class="ml-[8%]">
                        <br />
                        <h1 style={textStyle} class="text-white font-bold">F1 Draft (retired)</h1>
                        <div class="h-[60%]">
                            
                            <p style={textStyle} class="text-xs mt-2 font-extralight">JavaScript, Python, Flask, MongoDB</p>
                            <p style={textStyle} class="text-sm mt-5 pr-4 pl-4">Due to my passion for Formula 1, I decided to create a real-time voting web application for F1 cars. The full-stack application used a MongoDB database, a Python Flask backend, and JavaScript with Axios on the frontent to access stored data.</p>

                        </div>

                        <a href={f1} target="_blank" class="flex w-20 z-50 text-sm p-1 mx-auto mt-4 w-[60%] text-white bg-[rgb(0,122,255)] rounded-2xl" style={ButtonStyle}>In-Depth</a>
                    </div>

                </div>

            </div>

        );
      };


//bg-[rgb(0,122,255)]
    return (
        <div class="h-[100%] w-[100%] flex-col">

        <div class="flex items-center">
            <div style={boxStyle} class="flex-1 h-64 m-2 ">

                        <div class="w-[100%] h-64 bg-black">
                        <br />
                        <h1 style={textStyle} class="text-white font-bold bg-[rgb(0,122,255)] p-1">Genetic Algorithm Routing</h1>
                        <div class="h-[60%]">
                            
                            <p style={textStyle} class="text-xs mt-2 font-extralight">Python</p>
                            <p style={textStyle} class="text-sm mt-5 pr-4 pl-4">Over the course of 6 months I worked on a solo project based around the problem surrounding organising coach networks, and specifically allocating students based on their locations to specific school routes, primarily using my own custom genetic algorithm.</p>
                            <a href={Coach} target="_blank" class="flex z-50 text-sm p-1 mx-auto mt-6 w-20 text-white text-center bg-[rgb(0,122,255)] rounded-2xl" style={ButtonStyle}>In-Depth</a>

                        </div>


                        </div>

            </div>

            <div style={boxStyle} class="flex-1 flex-col h-64 m-2">

                <div class="w-[100%] h-64 bg-white">

                <br />
                <h1 style={textStyle} class="text-white font-bold bg-[rgb(255,198,39)] p-1">Redefining Dominance - Data Science</h1>
                <div class="h-[60%]">
                    
                    <p style={textStyle2} class="text-xs mt-2 font-extralight">Python, Numpy, MatPlotLib</p>
                    <p style={textStyle2} class="text-sm mt-5 pr-4 pl-4 ">This article highlights the achievements and gives an overview of the style and success of NBA superstar Nikola Jokic. The report includes statistical analysis and modelling, machine learning techniques and more.</p>
                    <a href={DDominance} target="_blank" class="flex z-50 text-sm p-1 mx-auto mt-6 w-20 text-white bg-[rgb(255,198,39)] rounded-2xl" style={ButtonStyle}>Read Article</a>

                </div>
                </div>
           </div>
           
            


            <div style={boxStyle} class="flex-1 flex-col h-64 m-2">

                <div class="w-[100%] h-64 bg-black">

                <br />
                <h1 style={textStyle} class="text-white font-bold bg-[rgb(0,122,255)] p-1">F1 Draft (retired)</h1>
                <div class="h-[60%]">
                    
                    <p style={textStyle} class="text-xs mt-2 font-extralight">JavaScript, Python, Flask, MongoDB</p>
                    <p style={textStyle} class="text-sm mt-5 pr-4 pl-4 ">Due to my passion for Formula 1, I decided to create a real-time voting web application for F1 cars. The full-stack application used a MongoDB database, a Python Flask backend, and JavaScript with Axios on the frontent to access stored data.</p>
                    <a href={f1} target="_blank" class="flex z-50 text-sm p-1 mx-auto mt-6 w-20 text-white bg-[rgb(0,122,255)] rounded-2xl" style={ButtonStyle}>In-Depth</a>

                </div>
                </div>
           </div>

           


        </div>

        

        </div>
    );
    };


export default Projects
