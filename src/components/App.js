import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Sessions from "./Sessions.js";
import Seats from "./Seats.js";

const axios = require("axios").default;

export default function App() {
	const ApiUrl = "https://mock-api.driven.com.br/api/v5/cineflex/";

	const [movies, setMovies] = useState([]);
	const [sessions, setSessions] = useState([]);

	useEffect(() => {
		const promisse = axios.get({ ApiUrl });
		promisse
			.then((response) => {
				setMovies(response.data);
			})
			.catch((error) => {
				console.log("deu ruim");
			});
	}, []);

	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<Home movies={movies} setMovies={setMovies} />}
					/>
					<Route
						path="/sessoes/:idFilme/"
						element={
							<Sessions
								API={ApiUrl}
								sessions={sessions}
								setSessions={setSessions}
							/>
						}
					/>
					<Route
						path="showtimes/:idSession/seats"
						element={<Seats />}
						/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
