import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { slideItem } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	overflow: hidden;					
	position: relative;
	${mobile({display:"none"})}
`;
const Arrow = styled.div`
	position: absolute;
	width: 50px;
	height: 50px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	bottom: 0;
	margin: auto;
	left: ${(props) => props.position === "left" && "10px"};
	right: ${(props) => props.position === "right" && "10px"};
	cursor: pointer;
	opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
	height: 100vw;
	display: flex;
    transition: all 1.5s ease;
	transform: translate(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
	height: 100%;
	flex: 1;
`;
const Image = styled.img`
	height: 80%;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 70px;
`;
const Desc = styled.p`
	margin: 50px 0;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`;

const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handleClick = (pos) => {
		if (pos === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};
	return (
		<Container>
			<Arrow position="left" onClick={()=>handleClick("left")}>
				<ArrowLeftOutlined />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{slideItem.map((item) => (
					<Slide bg={item.bg} key={item.id}>
						<ImageContainer>
							<Image src={item.img} />
						</ImageContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Button>Shop Now</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow position="right" onClick={()=>handleClick("right")}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;
