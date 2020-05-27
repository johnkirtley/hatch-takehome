import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = Styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 2rem 0;
`;

export const Header = (props) => {
	const changeAuth = () => {
		window.localStorage.setItem('auth', false);
	};

	return (
		<HeaderContainer>
			<h2>Track Card Applicant Information</h2>
			<Link to='/' onClick={changeAuth}>
				Logout
			</Link>
		</HeaderContainer>
	);
};
