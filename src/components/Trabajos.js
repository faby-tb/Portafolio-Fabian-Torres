import React from 'react';

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import img1 from '../img/img1.jpg';
import img2 from '../img/img2.png';

const Trabajos = (props) => {
    const responsive = props.props.responsive[0];
    return( <div className="">
                <nav className="navbar">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link id="aboutme" className="nav-link" to="/">Acerca De Mí</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="trabajos" className="nav-link selected-nav" to="/trabajos">Trabajos</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="habilidades" className="nav-link" to="/habilidades">Habilidades</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="contacto" className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <Carousel className="carousel" infinite autoPlay autoPlaySpeed={4500} draggable={false} keyBoardControl={true} removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
                    <div className="card">
                        <div className="embed-responsive embed-responsive-16by9">
                            <img src={img1} className="card-img-top embed-responsive-item" alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Atardecer Puntarenense</h5>
                            <p className="card-text f-light text">Proyecto Captura de Imagenes</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="embed-responsive embed-responsive-16by9">
                            <img src={img2} className="card-img-top embed-responsive-item" alt="Vostok6"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Vostok6</h5>
                            <p className="card-text f-light text">Juego / Proyecto ExpoMedia 2019.</p>
                            <a href="https://github.com/faby-tb/Vostok6" className="btn btn-primary">Ir al proyecto</a>
                        </div>
                    </div>
                    </Carousel>
                </div>

            </div>);
}

export default Trabajos;