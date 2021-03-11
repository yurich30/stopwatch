import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { interval, Subject } from "rxjs";
import { takeUntil } from 'rxjs/operators'

export default function App() {

	const [time, setTime] = useState(0);
	const [act, setAct] = useState('stop')

	useEffect(() => {
		const stopwatch$ = new Subject();
		interval(1000)
			.pipe(takeUntil(stopwatch$))
			.subscribe(() => {
			if (act === 'start'){
				setTime(val => val + 1000);
			}
			});
			return () => {
			stopwatch$.next();
			stopwatch$.complete();
			};
	},[act])

	const start = () => {
		setAct('start');
	}

	const stop = () => {
		setAct('stop');
		setTime(0);
	}

	const wait = () => {
		setAct('wait')
	}

	return (
		<div>
			<h1>{ new Date(time).toISOString() }</h1>
			<button onClick={ () => start() }>Start</button>
			<button onClick={ () => stop() }>Stop</button>
			<button onDoubleClick={ () => wait() }>Wait</button>
		</div>
	);
}
 
render(<App />, document.getElementById("root"));