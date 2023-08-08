import { useState } from 'react';
import CalculateCircleArea from './components/CalculateCircleArea';
import CalculateSquareArea from './components/CalculateSquareArea';
import CalculateTriangleArea from './components/CalculateTriangleArea';
import CelsiusToFahrenheit from './components/CelsiusToFahrenheit';
import FahrenheitToCelsius from './components/FahrenheitToCelsius';
import SayHello from './components/SayHello';
import Speed from './components/Speed';
import ThreeNumbers from './components/ThreeNumbers';
import TotalPrice from './components/TotalPrice';
import WriteMessage from './components/WriteMessage';

const App = () => {

const [counter, setCounter] = useState(0)

	return (
		<>
		<h1>{counter}</h1>
		<button onClick={()=>increase(counter, setCounter)}>INCREMENTAR</button>
		<button onClick={()=>reset( setCounter)}>RESET</button>
		<button onClick={()=>decrease( counter,setCounter)}>DISMINUIR</button>
			<SayHello name='Caballo Loco' />
			<CalculateSquareArea side={5} />
			<CalculateTriangleArea base={5} height={6} />
			<CalculateCircleArea radio={5} />
			<CelsiusToFahrenheit celsius={5} />
			<FahrenheitToCelsius fahrenheit={41} />
			<TotalPrice price={200} />
			<WriteMessage name='Caballo Loco'  material='flechas' size='las más grandes pa matar más'  note='Misión cumplida' />
			<ThreeNumbers number1={10} number2={15} number3={20}/>
			<Speed kmh={60} />
		</>
	);
};

const increase = (counter, setCounter) => {

	setCounter(counter + 1);
}
const decrease = (counter, setCounter) => {

	setCounter(counter - 1);
}
const reset = (setCounter) => {
	setCounter(0)
}

export default App;
