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
	width: 100%;
	height: 67px;
	left: 0px;
	top: 0px;
	background-color: #c3cfd9;
`;
const Title = styled.h1`
	font-family: "Roboto";
	font-style: normal;
	font-weight: 400;
	font-size: 34px;
	align-items: center;
	text-align: center;
	color: #e8833a;
`;