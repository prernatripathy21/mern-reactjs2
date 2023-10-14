import React from 'react';
import PropTypes from 'prop-types';

const keys = [
	
	{ id: '7', class: 'number', value: '7' },
	{ id: '8', class: 'number', value: '8' },
	{ id: '9', class: 'number', value: '9' },
	{ id: 'clearBack', class: 'function', value: 'CE' },
	
	{ id: '4', class: 'number', value: '4' },
	{ id: '5', class: 'number', value: '5' },
	{ id: '6', class: 'number', value: '6' },
	{ id: '%', class: 'number', value: '%' },

	{ id: '1', class: 'number', value: '1' },
	{ id: '2', class: 'number', value: '2' },
	{ id: '3', class: 'number', value: '3' },
	{ id: 'multiply', class: 'operator', value: '*' },
	{ id: 'minus', class: 'operator', value: '-' },
	
	{ id: 'divide', class: 'operator', value: '/' },
	{ id: '0', class: 'number', value: '0' },
	{ id: 'dot', class: 'number', value: '.' },
	{ id: 'calc', class: 'function', value: '=' },
	{ id: 'add', class: 'operator', value: '+' }
	
];

function Keyboard({ onClick }) {
	return (
		<div className="keyboard">
			{keys.map(key => (
				<div
					className="btn"
					id={key.id}
					key={key.id}
					onClick={() => onClick(key.id, key.class, key.value)}
				>
					{key.value}
				</div>
			))}
		</div>
	);
}

Keyboard.propTypes = {
	onClick: PropTypes.func
};

export default Keyboard;