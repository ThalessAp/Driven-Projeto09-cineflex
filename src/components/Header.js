import styled from 'styled-components';

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Title>
          CINEFLEX
        </Title>
      </StyledHeader> 
      
    </>
  );
}

const StyledHeader = styled.header`
	top: 0px;
	left: 0px;
	width: 100%;
	height: 67px;
	background-color: #c3cfd9;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Title = styled.h1`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 34px;
	align-items: center;
	text-align: center;
	color: #e8833a;

	align-content: center;
	justify-content: center;
`;