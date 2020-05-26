import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from 'antd';
import Styled from 'styled-components';

import { v4 as uuidv4 } from 'uuid';

export const MainView = (props) => {
	const Container = Styled.div`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        width: 80%;
        margin: auto;
    `;

	return (
		<Container>
			{props.data.map((person) => (
				<Card
					key={uuidv4()}
					bordered={true}
					title={`${person.first_name} ${person.last_name}`}
					extra={<Link to={`/applicants/${person.id}`}>More</Link>}
					style={{ width: 300 }}>
					<div>
						<p>Credit Score:</p>
						<p>{person.credit_indicator}</p>
					</div>
				</Card>
			))}
		</Container>
	);
};
