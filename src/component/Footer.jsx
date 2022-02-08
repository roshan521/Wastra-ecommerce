import {
	Facebook,
	Instagram,
	MailOutlined,
	Phone,
	Pinterest,
	Room,
	Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	display: flex;
	${mobile({flexDirection: "column"})}
`;
const Left = styled.div`
	flex: 1;
	padding: 20px;
	display: flex;
	flex-direction: column;
`;

const Logo = styled.h1``;
const Desc = styled.p`
	margin: 20px 0px;
`;
const SocailContainer = styled.div`
	display: flex;
`;
const SocailIcon = styled.div`
	background-color: #${(props) => props.color};
	width: 40px;
	height: 40px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;
`;

const Middle = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ display:"none" })}
`;

const Title = styled.h1`
	margin-bottom: 30px;
`;
const List = styled.ul`
	display: flex;
	list-style: none;
	flex-wrap: wrap;
	margin: 0;
	padding: 0;
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;
const Right = styled.div`
	flex: 1;
	padding: 20px;
	${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
	margin-bottom: 10px;
	display: flex;
	align-items: center;
`;

const Payment = styled.img`
width: 50%;
`

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>Wastra.</Logo>
				<Desc>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don’t look even slightly believable.
				</Desc>
				<SocailContainer>
					<SocailIcon color="3B5999">
						<Facebook />
					</SocailIcon>
					<SocailIcon color="E4405F">
						<Twitter />
					</SocailIcon>
					<SocailIcon color="55ACEE">
						<Instagram />
					</SocailIcon>
					<SocailIcon color="E60023">
						<Pinterest />
					</SocailIcon>
				</SocailContainer>
			</Left>
			<Middle>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>About Us</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Middle>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: "10px" }} /> Tamnagar, Butwal, Nepal
				</ContactItem>
				<ContactItem>
					<Phone style={{ marginRight: "10px" }} /> +0 00 000 000
				</ContactItem>
				<ContactItem>
					<MailOutlined style={{ marginRight: "10px" }} />
					roshanthapa521@gmail.com
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;
