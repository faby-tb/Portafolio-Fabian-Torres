import React from 'react';

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Habilidades = () => {
    return(<div>
                <nav className="navbar">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link id="aboutme" className="nav-link " to="/">Acerca De Mí</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="trabajos" className="nav-link" to="/trabajos">Trabajos</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="habilidades" className="nav-link selected-nav" to="/habilidades">Habilidades</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="contacto" className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <ul className="list-group list-group-flush text-center">
                        <li className="list-group-item bg-transparent my-3">
                	        <h2><i className="ico fa fa-cubes"></i> Facilidad de adaptarme a distintos entornos de programación </h2>
                        </li> 
                        <li className="list-group-item bg-transparent my-3">
                	        <h2> Habilidad para desempeñarme tanto en grupo como individualmente <i className="ico fa fa-users"></i></h2>
                        </li> 
                        <li className="list-group-item bg-transparent my-3">
                	        <h2><i className="ico fa fa-camera-retro"></i> Creatividad en la fotografía, conocimiento en composición y encuadres </h2>
                        </li> 
                        <li className="list-group-item bg-transparent my-3">
                	        <h2> Edición y corrección de fotografías <i className="ico 	fa fa-image"></i> </h2>
                        </li>
                        <li className="list-group-item bg-transparent my-3">
                	        <h2><i className="ico fa fa-book"></i> Capacidad de autoaprendizaje </h2>
                        </li>
                        <li className="list-group-item bg-transparent my-3">
                	        <h2> Conocimiento de teoria relacionada al diseño <i className="ico fa fa-paint-brush"></i> </h2>
                        </li>
                        <li className="list-group-item bg-transparent my-3">
                	        <h2><i className="ico fa fa-puzzle-piece"></i> Excelente desempeño en tareas que requieran lógica matemática </h2>
                        </li>
                    </ul>

                </div>
            </div>);
}

export default Habilidades;