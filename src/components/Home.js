// Rota:  /

import { Link } from "react-router-dom";

export default function Home({ movies, setMovies }) {
	return (
		<>
			<div className="title">
				<h2>Selecione o filme</h2>
			</div>
			<div className="movie">
				{movies.map((movie) => {
					return (
						<>
							<Link to={`/sessoes/${movie.id}`}>
								<div className="poster">
									<img src={movie.posterURL} alt={movie.title} />
								</div>
							</Link>
						</>
					);
				})}
			</div>
		</>
	);
}
