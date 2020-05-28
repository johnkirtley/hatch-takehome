import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Card } from 'antd';

import { v4 as uuidv4 } from 'uuid';

export const DetailedView = (props) => {
	const [applicant, setApplicant] = useState();
	const { id } = useParams();

	useEffect(() => {
		let filter = props.data.filter((person) => {
			return person.id === id;
		});
		console.log(filter);
		setApplicant(filter);
	}, [props.data, id]);

	const gridStyle = {
		width: '50%',
		textAlign: 'center',
	};

	return (
		<>
			{applicant === undefined ? (
				''
			) : (
				<div>
					{applicant.map((info) => (
						<>
							<Card
								title={`${info.first_name} ${info.last_name}`}
								key={uuidv4()}
								style={{ textAlign: 'center', width: '80%', margin: 'auto' }}>
								<Card.Grid style={gridStyle}>
									Credit Indicator: {info.credit_indicator}
								</Card.Grid>
								<Card.Grid style={gridStyle}>
									Mortgage Applications: 3
								</Card.Grid>
								<Card.Grid style={gridStyle}>
									Credit Card Applications: 5
								</Card.Grid>
								<Card.Grid style={gridStyle}>
									Student Loan Applications: 0
								</Card.Grid>
								<Card.Grid style={gridStyle}>
									Personal Loan Applications: 1
								</Card.Grid>
								<Card.Grid style={gridStyle}>
									Apartment Rental Applications: 2
								</Card.Grid>
								<Card.Grid style={gridStyle}>
									Employment Verification: N/A
								</Card.Grid>
								<Card.Grid style={gridStyle}>Pre-Qualified Offers: 6</Card.Grid>
							</Card>
							<div
								style={{
									textAlign: 'center',
									fontSize: '1rem',
									marginTop: '1rem',
								}}>
								<Link to='/applicants'>Go Back</Link>
							</div>
						</>
					))}
				</div>
			)}
		</>
	);
};
