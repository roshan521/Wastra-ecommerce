import React from "react";
import styled from "styled-components";

const Container = styled.div`
	background-color: teal;
	width: 100vw;
	color: white;
	text-align: center;
	height: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	font-weight: 500;
`;

function Announcement() {
	return <Container>Super Deal! Free Shipping on Orders over 50$</Container>;
}

export default Announcement;
