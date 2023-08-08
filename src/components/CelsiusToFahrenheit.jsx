const CelsiusToFahrenheit = ({ celsius }) => {
	const fahrenheit = celsius * 1.8 + 32;
	return (
		<p>
			{celsius} grados Celsius son {fahrenheit} grados Fahrenheit
		</p>
	);
};

export default CelsiusToFahrenheit;
