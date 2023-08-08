const Speed = ({ kmh }) => {
	const ms = (kmh * 1000) / 3600;
	return (
		<p>
			{kmh} Km/h son {ms.toFixed(2)} m/s.
		</p>
	);
};

export default Speed;
