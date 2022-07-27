import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Sessions from "./components/Sessions.js";

const axios = require("axios").default;

export default function App() {
	const ApiUrl = "https://mock-api.driven.com.br/api/v5/cineflex/";

  const [movies, setMovies] = useState([]);
  

	useEffect(() => {
		const promisse = axios.get({ ApiUrl });
		promisse
			.then((response) => {
				console.log(response.data);
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
          <Route path="/sessoes/:idFilme" element={<Sessions API={ApiUrl} />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
