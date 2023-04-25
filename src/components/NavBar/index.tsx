import React from "react";
import { Wrapper } from "./styles";
import { useHistory } from "react-router-dom";
import SearchBar from "../SearchBar";

const NavBar: React.FC = () => {
	const history = useHistory();

	return (
		<Wrapper>
			<div>
				<h1 onClick={() => history.push("/home")}>Check Weather!</h1>
			</div>
			<SearchBar />
		</Wrapper>
	);
};

export default NavBar;
