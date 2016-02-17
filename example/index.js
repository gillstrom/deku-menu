/** @jsx dom */
import dom from 'magic-virtual-element';
import {render as r, tree} from 'deku';
import {Menu, MenuItem, SubMenu} from '../';

const render = () => {
	return (
		<div>
			<div class='MyMenu Left'>
				<Menu class='CustomClass'>
					<SubMenu title='National Hockey League'>
						<SubMenu title='Eastern Conference'>
							<MenuItem>Buffalo Sabres</MenuItem>
							<MenuItem>Florida Panthers</MenuItem>
							<MenuItem>New York Rangers</MenuItem>
							<MenuItem>Ottawa Senators</MenuItem>
						</SubMenu>
						<SubMenu title='Western Conference'>
							<MenuItem>Anaheim Ducks</MenuItem>
							<MenuItem>Los Angeles Kings</MenuItem>
							<MenuItem>San Jose Sharks</MenuItem>
						</SubMenu>
					</SubMenu>
					<SubMenu title='Swedish Hockey League'>
						<MenuItem>Frölunda Indians</MenuItem>
						<MenuItem>HV71</MenuItem>
						<MenuItem>Växjö Lakers</MenuItem>
					</SubMenu>
					<MenuItem>Zamboni</MenuItem>
				</Menu>
			</div>
			<div class='MyMenu Right'>
				<Menu class='CustomClass' left>
					<SubMenu title='National Hockey League'>
						<SubMenu title='Eastern Conference'>
							<MenuItem>Buffalo Sabres</MenuItem>
							<MenuItem>Florida Panthers</MenuItem>
							<MenuItem>New York Rangers</MenuItem>
							<MenuItem>Ottawa Senators</MenuItem>
						</SubMenu>
						<SubMenu title='Western Conference'>
							<MenuItem>Anaheim Ducks</MenuItem>
							<MenuItem>Los Angeles Kings</MenuItem>
							<MenuItem>San Jose Sharks</MenuItem>
						</SubMenu>
					</SubMenu>
					<SubMenu title='Swedish Hockey League'>
						<MenuItem>Frölunda Indians</MenuItem>
						<MenuItem>HV71</MenuItem>
						<MenuItem>Växjö Lakers</MenuItem>
					</SubMenu>
					<MenuItem>Zamboni</MenuItem>
				</Menu>
			</div>
		</div>
	);
};

const App = {render};
const app = tree(<App/>);

r(app, document.body);
