const CalculateTriangleArea = ({ base, height }) => {
	const triangleArea = (base * height) / 2;
	return <p>El área del triángulo es {triangleArea}</p>;
};

export default CalculateTriangleArea;
