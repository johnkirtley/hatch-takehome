import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

	return (
		<>
			{applicant === undefined ? (
				'loading'
			) : (
				<div>
					{applicant.map((info) => (
						<div>
							<p>
								{info.first_name} {info.last_name}
							</p>
						</div>
					))}
				</div>
			)}
		</>
	);
};
