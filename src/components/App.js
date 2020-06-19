import React from 'react';

// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Hero from './Hero';
import AboutMe from './AboutMe';
import Trabajos from './Trabajos';
import Habilidades from './Habilidades';
import Contacto from './Contacto';

class App extends React.Component {
	state = {
		responsive: [{
			superLargeDesktop: {
			  breakpoint: { max: 4000, min: 3000 },
			  items: 1
			},
			desktop: {
			  breakpoint: { max: 3000, min: 1024 },
			  items: 1
			},
			tablet: {
			  breakpoint: { max: 1024, min: 464 },
			  items: 1
			},
			mobile: {
			  breakpoint: { max: 464, min: 0 },
			  items: 1
			}
		  }],
	};
	render = () => {
		return (
			<Router>
				<div>
					<Hero></Hero>
					<div id="content" className="container-fluid invert full p-0">
						<div className="over-navbar container-fluid"></div>
					<Switch>
						<Route exact path="/">
							<AboutMe></AboutMe>
						</Route>
						<Route exact path="/trabajos">
							<Trabajos props={this.state}></Trabajos>
						</Route>
						<Route exact path="/habilidades">
							<Habilidades></Habilidades>
						</Route>
						<Route exact path="/contacto">
							<Contacto></Contacto>
						</Route>
						<Route exact path="*">
							<AboutMe></AboutMe>
						</Route>
					</Switch>
					</div>
				</div>
			</Router>
		);
 	 };
}

export default App;
