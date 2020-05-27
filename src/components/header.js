import React from 'react';
import Styled from 'styled-components';

const HeaderContainer = Styled.div`
    text-align: center;
`;

export const Header = () => {
	return (
		<HeaderContainer>
			<h2>Track Card Applicant Information</h2>
		</HeaderContainer>
	);
};
