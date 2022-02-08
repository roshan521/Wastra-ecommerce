import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Info = styled.div`
	opacity: 0;
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2;
	transition: all 0.5s ease;
	cursor: pointer;
`;

const Container = styled.div`
	flex: 1;
	min-width: 280px;
	height: 350px;
	display: flex;
	background-color: #f5fbfd;
	align-items: center;
	justify-content: center;
	position: relative;
	margin: 5px;

	&:hover ${Info} {
		opacity: 1;
	}
`;
const Circle = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: white;
	position: absolute;
`;
const Image = styled.img`
	height: 75%;
	z-index: 1;
`;

const Icon = styled.div`
	margin: 3px;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease;

	&:hover {
		transform: scale(1.1);
		background-color: #e9f5f5;
	}
`;

const Product = ({ item }) => {
	return (
		<Container>
			<Circle />
			<Image src={item.img} />
			<Info>
				<Icon>
					<ShoppingCartOutlined />
				</Icon>
				<Icon>
					<SearchOutlined />
				</Icon>
				<Icon>
					<FavoriteBorderOutlined />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
