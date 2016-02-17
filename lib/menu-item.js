/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	active: {
		type: 'boolean'
	},
	class: {
		type: 'string'
	}
};

const render = ({props}) => {
	const {active, children} = props;
	const classes = {
		'MenuItem': true,
		'MenuItem--active': active
	};

	return (
		<li class={[classes, props.class]}>
			<div class='MenuItem-title'>{children}</div>
		</li>
	);
};

export default {propTypes, render};
