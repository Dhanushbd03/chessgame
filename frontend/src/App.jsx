import React from "react";
import Landing from "./screens/Landing";
import Game from "./screens/Game";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/game" element={<Game />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
