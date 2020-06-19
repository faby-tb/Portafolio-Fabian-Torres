import React from 'react';

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Contacto = () => {
    return( <div>
                <nav className="navbar">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link id="aboutme" className="nav-link" to="/">Acerca De Mí</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="trabajos" className="nav-link" to="/trabajos">Trabajos</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="habilidades" className="nav-link" to="/habilidades">Habilidades</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="contacto" className="nav-link selected-nav" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </nav>

                <div className="container">
                    <div className="card-contact row align-items-center justify-content-around">
                        <div className="col-6 text-center">
                            <h2>
                                <i className="fab icon align-middle fa-facebook-f"></i> <a className="text-decoration-none stretched-link" href="https://www.facebook.com/fabian.torres.31521/">Fabián Torres</a>
                            </h2>
                        </div>
                        <div className="col-6 text-center">
                            <h2>
                                <i className="fab icon align-middle fa-twitter"></i> <a className="text-decoration-none stretched-link" href="https://twitter.com/toresu_f">@toresu_f</a>
                            </h2>
                        </div>
                        <div className="col-6 text-center">
                            <h2>
                                <i className="fas icon align-middle fa-envelope"></i> <a className="text-decoration-none stretched-link" href="mailto:darkmogan@gmail.com">darkmogan@gmail.com</a>
                            </h2>
                        </div>
                        <div className="col-6 text-center">
                            <h2>   
                                <i className="fab icon align-middle fa-instagram"></i> <a className="text-decoration-none stretched-link" href="https://www.instagram.com/toresu_f/">toresu_f</a>
                            </h2>
                        </div>
                        <div className="col-6 text-center">
                            <h2>   
                                <i className="fab icon align-middle fa-youtube"></i> <a className="text-decoration-none stretched-link" href="https://www.youtube.com/channel/UCwaWtiYq9TnPhKUsz6smqHw">Fabián Torres</a>
                            </h2>
                        </div>
                        <div className="col-6 text-center">
                            <h2>
                                <i className="fab icon align-middle fa-github"></i> <a className="text-decoration-none stretched-link" href="https://github.com/faby-tb">faby-tb</a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>);
}

export default Contacto;