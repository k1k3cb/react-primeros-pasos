import React from 'react';

const WriteMessage = ({ name, material, size, note }) => {
	return (
		<p>
			{name} ha pedido una caja de {material}, de tamaño {size}. {note}.
		</p>
	);
};

export default WriteMessage;
