// Rota:  /

import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function Home({ movies, setMovies }) {
	const { idFilme } = useParams();
	return (
		<>
			<div className="title" >
				<Title>Selecione o filme</Title>
			</div>
			<Movie>
				<div className="movie">
					{movies.map((movie) => {
						return (
							<>
								<Link to={`/sessoes/${idFilme}`}>
									<Poster>
										<div className="poster">
											<img src={movie.posterURL} alt={movie.title} />
										</div>
									</Poster>
								</Link>
							</>
						);
					})}
				</div>
			</Movie>
		</>
	);
}

const Title = styled.h2`
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
	/* FIXME Revisar essa cor dps */
	background-color: red;
	box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
	border-radius: 3px;
	width: 150px;
	height: 210px;
	row-gap: 30px;
	column-gap: 20px;
	margin: 15px;
`;
const Poster = styled.div`
	width: 145px;
	height: 205px;
	background: url(movie.posterURL);
`;
