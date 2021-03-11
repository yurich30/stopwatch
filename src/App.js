import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { interval, Subject } from "rxjs";

export default function App() {

	const [time, setTime] = useState(0);

	useEffect(() => {
		const stopwatch$ = new Subject();
		interval(1000)
		  .subscribe(() => {
			setTime(val => val + 1000);
		  });
	},[])

	return (
		<div>
			<h1>{ new Date(time).toISOString() }</h1>
		</div>
	);
}
 
render(<App />, document.getElementById("root"));