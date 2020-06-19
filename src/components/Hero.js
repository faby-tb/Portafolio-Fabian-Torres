import React from 'react';

import UseAnimations from 'react-useanimations';
import Particles from 'react-particles-js';

import video from '../videos/videoX.mp4';
import poster from '../img/bg.jpg';

const Habilidades = () => {
    return(
        <div className="hero full container-fluid overflow-hidden d-flex align-items-start flex-column bd-highlight p-0">
            <Particles className="particles"/>
            <div className="container-video">
                    <video src={video} autoPlay loop muted poster={poster}></video>
            </div>

            <h1 className="display-1 align-self-center mt-auto mb-0 title">
                Fabian
            </h1>	
            <h2 className="display-4 align-self-center mb-auto mt-0">Torres Benavides</h2>
            <div className="row container-fluid">	
                <div className="ml-5 pl-5 row align-self-start hero-info">
                    <span className="mx-5 info">
                        <div className="f-normal circle p75">
                            <span>75%</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>		
                        <h3 className="f-normal text-center mr-3">Diseñador</h3>
                    </span>
                    <span className="info">
                        <div className="f-normal circle p93">
                            <span>93%*</span>
                            <div className="slice">
                                <div className="bar"></div>
                                <div className="fill"></div>
                            </div>
                        </div>		
                        <h3 className="f-normal text-center mr-3">Programador</h3>
                    </span>
                </div>
                <div className="ml-auto mr-5 hero-text">
                    <h1 className="mr-5 display-4 f-bold">UCR</h1>
                    <h2 className="mr-5 text"> Informática y Tecnología Multimedia </h2>
                    <h3 className="mr-5 f-normal text"> Páginas Web, Videojuegos y más.</h3>
                </div>
            </div>
            <a href="#content" className="hero-btn btn highlight mt-auto btn-to-content pt-1 px-3 mb-3"> <UseAnimations animationKey="arrowDown" size={60} /></a>
        </div>);
}

export default Habilidades;