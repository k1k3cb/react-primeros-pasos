const FahrenheitToCelsius = ({ fahrenheit }) => {
	const celsius = (fahrenheit - 32) / 1.8;

	return (
		<p>
			{fahrenheit} grados fahrenheit son {celsius} grados celsius
		</p>
	);
};

export default FahrenheitToCelsius;
