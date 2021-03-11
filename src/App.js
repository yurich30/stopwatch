import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { interval, Subject } from "rxjs";

export default function App() {

	const [time, setTime] = useState(0);
	const [act, setAct] = useState('stop')

	useEffect(() => {
		const stopwatch$ = new Subject();
		interval(1000)
		  .subscribe(() => {
			if (act === 'start'){
				setTime(val => val + 1000);
			}
		  });
	},[act])

	const start = () => {
		setAct('start')
	}

	return (
		<div>
			<h1>{ new Date(time).toISOString() }</h1>
			<button onClick={() => start()}>Start</button>
		</div>
	);
}
 
render(<App />, document.getElementById("root"));