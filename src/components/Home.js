// Rota:  /
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Home({ movies, setMovies, API, setApi }) {
	return (
		<>
			<div className="title">
				<Subtitle>Selecione o filme</Subtitle>
			</div>
			<Movie>
				{movies.map((movie) => {
					return (
						<>
							<div className="movie" onClick={() =>
							{setApi (API , `${movie.id}/showtimes`)}}>
								<Link to={`/sessoes/${movie.id}`}>
									<Poster>
										<img src={movie.posterURL} alt={movie.title} />
									</Poster>
								</Link>
							</div>
						</>
					);
				})}
			</Movie>
		</>
	);
}

const Subtitle = styled.h2`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 24px;
	align-items: center;
	text-align: center;
	color: #293845;

	width: 100%;
	height: 110px;
`;
const Movie = styled.div`
	max-width: 100%;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

	div {
		display: flex;
		align-items: center;
		justify-content: center;

		background-color: #fff;
		box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
		border-radius: 3px;

		max-width: 150px;
		max-height: 210px;
		margin: 15px;
	}
`;
const Poster = styled.div`


	img {
		max-width: 145px;
		max-height: 205px;
	}
`;
