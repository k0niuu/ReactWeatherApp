import styled from "styled-components";

export const Wrapper = styled.div`
	min-height: 100vh;
	padding: 2rem 0rem;
	display: grid;
	row-gap: 0rem;
	justify-content: center;

	#daily-forecast {
		text-align: center;
		font-size: 4rem;
		font-weight: bold;
		color: white;
	}

	h2 {
		margin-top: 50px;
		color: white;
	}

	.main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.error {
		display: grid;
		justify-content: center;
		align-items: center;

		h2 {
			text-align: center;
			word-break: break-word;
		}
	}
`;
