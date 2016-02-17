/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	class: {
		type: 'string'
	},
	open: {
		type: 'string'
	},
	title: {
		type: 'string'
	}
};

const render = ({props, state}, setState) => {
	const {children, open, title} = props;
	const {active} = state;
	const classes = {
		'MenuItem': true,
		'MenuItem--parent': true,
		'MenuItem--open': active
	};

	const parentStyle = {
		position: 'relative'
	};

	const childStyle = {
		display: active ? 'block' : 'none',
		[open]: '100%',
		position: 'absolute',
		top: '0'
	};

	children.map(x => x.attributes.open = open);

	return (
		<li class={[classes, props.class]} style={parentStyle} onMouseEnter={() => setState({active: true})} onMouseLeave={() => setState({active: false})}>
			<div class='MenuItem-title'>{title}</div>
			<ul class='SubMenu' style={childStyle}>
				{children}
			</ul>
		</li>
	);
};

export default {propTypes, render};
