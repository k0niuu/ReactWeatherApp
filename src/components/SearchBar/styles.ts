import styled from "styled-components";

export const Wrapper = styled.div`
	width: 50%;
	display: grid;
	grid-template-columns: 1fr auto;
	justify-content: center;
	align-items: center;
	border: 1px solid rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	justify-self: flex-end;
	padding: 0.2rem 0.5rem;
	background-color: #88e1ba;

	img {
		cursor: pointer;
	}
`;

export const Input = styled.input`
	padding: 5px;
	border: none;
	border-radius: 5px;
	overflow: hidden;
	user-select: text !important;
	background-color: #88e1ba;

	&::placeholder {
		color: rgba(0, 0, 0, 0.5);
	}
`;
