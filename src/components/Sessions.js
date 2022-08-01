// Rota /sessoes/${idFilme}
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";

export default function Sessions({ Api, sessions, setSessions }) {
	const { movie, setMovie } = useState({
		title: "{sessions.title}",
		posterURL: "{ sessions.posterURL }",
		weekday: "",
		hour: "",
	});

	function setTime(day, time) {
		setMovie({
			...movie,
			weekday: { day },
			hour: { time },
		});
	}

	useEffect(() => {
		const promisse = axios.get({ Api });
		promisse
			.then((response) => {
				setSessions(response.data);
			})
			.catch((error) => {
				console.log("deu ruim");
			});
	}, []);

	return (
		<>
			<Subtitle>Selecione o horario</Subtitle>

			<li>
				{sessions.days.map((session) => {
					return (
						<>
							<div className="weekDay">
								<span>
									<Date>{session.weekday}</Date>-<Date>{session.date}</Date>
								</span>
								<span>
									{session.showtimes.map((showtime) => {
										return (
											<>
												<div
													className="showtime"
													onClick={() => {
														setTime(showtime.weekday, showtime.name);
													}}>
													<Showtime>
														<div>{showtime.name}</div>
													</Showtime>
												</div>
											</>
										);
									})}
								</span>
							</div>
						</>
					);
				})}
			</li>
			<Footer movie={movie} />
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
const Date = styled.h3`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 23px;
	display: flex;
	align-items: center;
	letter-spacing: 0.02em;

	color: #293845;
`;
const Showtime = styled.div`
	width: 85px;
	height: 45px;
	background: #e8833a;
	border-radius: 3px;
	display: flex;
	align-items: center;
	justify-content: center;

	div{
		color: #fff;
	}
`;
