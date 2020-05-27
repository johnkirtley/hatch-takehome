import React from 'react';

import Styled from 'styled-components';

export const Sorting = (props) => {
	const sortAsc = () => {
		props.setIsSorted(true);
		props.setSorted(
			props.data.sort((a, b) => {
				return a.credit_indicator - b.credit_indicator;
			})
		);
	};

	const sortDesc = () => {
		props.setIsSorted(false);
		props.setSorted(
			props.data.sort((a, b) => {
				return b.credit_indicator - a.credit_indicator;
			})
		);
	};

	const ButtonContainer = Styled.div`
	display: flex;
	justify-content: center;
    align-items: center;
    flex-flow: column;
`;

	return (
		<ButtonContainer>
			<h2>Sort By Credit Score</h2>
			<div>
				<button onClick={sortAsc}>Sort ASC</button>
				<button onClick={sortDesc}>Sort DESC</button>
			</div>
		</ButtonContainer>
	);
};
