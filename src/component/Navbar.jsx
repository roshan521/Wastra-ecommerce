import { Search, ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	height: 60px;
	${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	padding: 5px;
	margin-left: 25px;
`;

const Input = styled.input`
	font-size: 14px;
	border: none;
	${mobile({ width: "40px" })}
`;
const Middle = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	${mobile({ justifyContent: "center", flex: "2" })}
`;

const MenuItem = styled.div`
	margin-left: 25px;
	font-size: 16px;
	cursor: pointer;
	${mobile({ fontSize: "12px",marginLeft:"10px"})}
`;
function Navbar() {
	return (
		<div>
			<Container>
				<Wrapper>
					<Left>
						<Language>EN</Language>
						<SearchContainer>
							<Input placeholder="search" />
							<Search />
						</SearchContainer>
					</Left>
					<Middle>
						<Logo>Wastra.</Logo>
					</Middle>
					<Right>
						<MenuItem>Register</MenuItem>
						<MenuItem>Login</MenuItem>
						<MenuItem>
							<Badge badgeContent={4} color="primary">
								<ShoppingCart color="action" />
							</Badge>
						</MenuItem>
					</Right>
				</Wrapper>
			</Container>
		</div>
	);
}

export default Navbar;
