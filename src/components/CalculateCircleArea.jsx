const CalculateCircleArea = ({ radio }) => {
	const circleArea = Math.PI * Math.pow(radio, 2);

	return <p>El área del círculo es {circleArea.toFixed(3)}</p>;
};

export default CalculateCircleArea;
