/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	class: {
		type: 'string'
	},
	left: {
		type: 'boolean'
	}
};

const defaultProps = {
	children: [],
	class: 'SubMenu'
};

const render = ({props}) => {
	const {children, left} = props;

	children.map(x => x.attributes.open = left ? 'right' : 'left');

	return (
		<ul class={props.class}>
			{children}
		</ul>
	);
};

export default {defaultProps, propTypes, render};
