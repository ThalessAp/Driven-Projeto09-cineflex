import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Sessions from "./Sessions.js";
import Seats from "./Seats.js";

const axios = require("axios").default;

export default function App() {
	const ApiUrl = "https://mock-api.driven.com.br/api/v7/cineflex";

	const [url, setUrl] = useState(`${ApiUrl}`);
	const [movies, setMovies] = useState([]);
	const [sessions, setSessions] = useState([]);

	useEffect(() => {
		const promisse = axios.get(`${url}/movies`);
		promisse
			.then((response) => {
				setMovies(response.data);
			})
			.catch((error) => {
				console.log("deu ruim");
			});
	}, []);

	function toogleSession(Api, page) {
		setUrl(`${Api}/${page}`);	

	}

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
								Api={url} 
								setApi={toogleSession}
								sessions={sessions}
								setSessions={setSessions}
							/>
						}
					/>
					<Route
						path="showtimes/:idSession/seats"
						element={
							<Seats
								API={ApiUrl}
								sessions={sessions}
								setSessions={setSessions}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
