import React, { useState } from "react";
import { render } from "react-dom";


 
export default function App() {

	const [time, setTime] = useState(0)

	return (
		<div>
			{time}
		</div>
	);
}
 
render(<App />, document.getElementById("root"));