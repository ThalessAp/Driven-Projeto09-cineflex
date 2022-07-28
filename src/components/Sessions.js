// Rota /sessoes/${idFilme}

import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer";

export default function Sessions({ ApiUrl, sessions, setSessions }) {
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
		const promisse = axios.get({ ApiUrl });
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
			<h2>Selecione o horario</h2>

			<li>
				{sessions.days.map((session) => {
					return (
						<>
							<div className="weekDay">
								<span>
									<h3>{session.weekday}</h3>-<h3>{session.date}</h3>
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
													<div className="time">
														<div>{showtime.name}</div>
													</div>
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