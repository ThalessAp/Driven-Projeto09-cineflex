import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Seats({ API }) {
  
  const [seats, setSeats] = useState([]);
  

  useEffect(() => {
    
    const promisse = axios.get(API);
    promisse
      .then((response) => { 
        setSeats(response.seats);
      })
      .catch((error) => { 
        console.log("deu ruim");
      });
    
    function toggleSelected(seat) {
      seat.isAvailable = !seat.isAvailable;
    }

  })

  return (
		<>
			<Subtitle>Selecione o(s) assento(s)</Subtitle>

			<div className="seats">
				{seats.map((seat) => {
					return (
						<>
							<div className="seat">
								<span>
									{seat.isAvailable ? (
										<div
											className="seatAvailable"
											onClick={() => {
												toggleSelected(seat);
											}}>
											{seat.name};
										</div>
									) : (
										<div className="seatUnavailable">{seat.name};</div>
									)}
								</span>
							</div>
						</>
					);
				})}
				;
				<span>
					<div>
						<Selected></Selected>
						Selecionado
					</div>
					<div>
						<SeatAvailable></SeatAvailable>
						Disponivel
					</div>
					<div>
						<SeatUnavailable></SeatUnavailable>
						Indisponivel
					</div>
				</span>
				<div>
					<form>
						<h4>Nome do comprador:</h4>
						<input type="text" placeholder="Digite seu nome... " />
						<h4>CPF do comprador:</h4>
            <input type="text" placeholder="Digite seu CPF... " />
            
            
					</form>
				</div>
			</div>
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
