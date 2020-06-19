import React from 'react';

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const AboutMe = () => {
    return( <div>
              <nav className="navbar">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link id="aboutme" className="nav-link selected-nav" to="/">Acerca De Mí</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="trabajos" className="nav-link" to="/trabajos">Trabajos</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="habilidades" className="nav-link" to="/habilidades">Habilidades</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="contacto" className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </nav>

                <div className="container card-aboutMe">
                    <div className="card mb-3 bg-transparent border-0">
                        <div className="row no-gutters">

                            <div className="col-md-4 img-p">
                                <img src="https://www.instagram.com/p/BviEwq1hzBu/media/?size=l" className="card-img rounded-circle" alt="Fotografía de Fabian Torres "/>
                            </div>

                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title f-bold mt-4">Fabián Torres Benavides</h5>
                                    <p className="card-text f-normal pt-1 text">
                                        Estudiante de la Universidad de Costa Rica, cursando bachillerato en Informática y Tecnología Multimedia.<br/>
                                        En el tiempo libre me gusta jugar videojuegos, componer música, tocar la guitarra y mejorar mi lógica de programación.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-2">
                                <p className="text-rotate"><span className="display-4">19 Años</span><br/> 13 Noviembre 2000</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>);
}

export default AboutMe;