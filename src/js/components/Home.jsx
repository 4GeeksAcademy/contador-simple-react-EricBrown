import React, { useRef } from "react";
import SecondsCounter from "./SecondsCounter";

//create your first component
const Home = () => {
	const counterRef = useRef();

	return (
		<div>
			<SecondsCounter ref={counterRef} />
			<div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}>
				<button onClick={() => counterRef.current.pause()}>Parar</button>
				<button onClick={() => counterRef.current.reset()}>Reiniciar</button>
				<button onClick={() => counterRef.current.resume()}>Resumir</button>
			</div>
		</div>
	);
};

export default Home;