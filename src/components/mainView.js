import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Sorting } from './sorting';
import { Header } from './header';

import { Card } from 'antd';
import Styled from 'styled-components';

import { v4 as uuidv4 } from 'uuid';

export const MainView = (props) => {
	const [data, setData] = useState([]);
	const [sorted, setSorted] = useState([]);
	const [isSorted, setIsSorted] = useState(false);

	// Sets Data Based Upon Whether Or Not It Has Been Sorted
	useEffect(() => {
		if (!isSorted) {
			setData(props.data);
		} else {
			setData(sorted);
		}
	}, [isSorted, sorted, props.data]);

	// Color Card Background Based On Credit Rating
	const rating = (score) => {
		if (score <= 5) {
			return '#f4a3a4';
		} else if (score > 5 && score <= 7) {
			return '#fff7dd';
		} else {
			return '#c4deb2';
		}
	};

	const Container = Styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1rem;
	width: 80%;
	margin: auto;
	margin-top: 2rem;
`;

	return (
		<>
			<Header />
			<Sorting
				data={data}
				isSorted={isSorted}
				setIsSorted={setIsSorted}
				setSorted={setSorted}
			/>
			<Container>
				{data.map((person) => (
					<Card
						id='applicant-card'
						key={uuidv4()}
						bordered={true}
						title={`${person.first_name} ${person.last_name}`}
						extra={<Link to={`/applicants/${person.id}`}>More Details</Link>}
						style={{
							width: 300,
							backgroundColor: rating(person.credit_indicator),
						}}>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexFlow: 'column',
							}}>
							<p>Credit Score:</p>
							<p>{person.credit_indicator}</p>
						</div>
					</Card>
				))}
			</Container>
		</>
	);
};
