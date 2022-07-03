import "./App.css";
import Panel from "./components/panel";
import Nav from "./components/nav";
import Auth from "./layouts/auth";
import Csgo from "./layouts/csgo";
import Dota from "./layouts/dota";
import Games from "./layouts/games";
import Login from "./layouts/login";
import Tf2 from "./layouts/tf2";
import { Route, Switch } from "react-router-dom";
import Rust from "./layouts/rust";

function App() {
	return (
		<div className="App">
			<Nav />
			<Panel />
			<Switch>
				<Route exact path="/" component={Tf2} />
				<Route exact path="/Auth" component={Auth} />
				<Route exact path="/Csgo" component={Csgo} />
				<Route exact path="/Dota" component={Dota} />
				<Route exact path="/Games" component={Games} />
				<Route exact path="/Login" component={Login} />
				<Route exact path="/Rust" component={Rust} />
			</Switch>
		</div>
	);
}

export default App;
