import React from 'react';

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import gif1 from '../img/gif1.gif';

import img1 from '../img/img1.jpg';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
import img4 from '../img/img4.png';

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
                            <img src={img1} className="card-img-top embed-responsive-item" alt="Puntarenas"/>
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
                    <div className="card">
                        <div className="embed-responsive embed-responsive-16by9">
                            <img src={img3} className="card-img-top embed-responsive-item" alt="Faro"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Ilustración Vectorial</h5>
                            <p className="card-text f-light text">Ilustracion ligera del faro de Puntarenas.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="embed-responsive embed-responsive-16by9">
                            <img src={img4} className="card-img-top embed-responsive-item" alt="TUP Banner"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Libro de Marca TUP</h5>
                            <p className="card-text f-light text">Creación de identidad visual y libro de marca para el TUP.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="embed-responsive embed-responsive-16by9">
                            <img src={gif1} className="card-img-top embed-responsive-item" alt="Animacion"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Animación</h5>
                            <p className="card-text f-light text">Pequeño proyecto de animación con efecto parallax.</p>
                        </div>
                    </div>
                    </Carousel>
                </div>

            </div>);
}

export default Trabajos;