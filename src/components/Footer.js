import styled from "styled-components";

export default function Footer({movie, session}) {
  return (
		<>
			<StyledFooter>
				<footer>
					<span>
            <div className="poster">
              <img src={movie.posterURL} alt={movie.title} />
            </div>
						<div className="title">
							<StyledInfo>{movie.title}</StyledInfo>
							<StyledInfo>{session} - {session.name}</StyledInfo>
						</div>
					</span>
				</footer>
			</StyledFooter>
		</>
	);
}

const StyledFooter = styled(Footer)`
	width: 100%;
	height: 117px;
	left: 0px;
	bottom: 0px;
	background-color: #dfe6ed;
	border: 1px solid #9eadba;
`;
const StyledInfo = styled.h2`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 26px;
	align-items: center;
	color: #293845;
`;