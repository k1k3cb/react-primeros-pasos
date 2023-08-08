const TotalPrice = ({ price }) => {
	const total = price * 1.21;

	return <p>El precio con IVA es de {total}</p>;
};

export default TotalPrice;
