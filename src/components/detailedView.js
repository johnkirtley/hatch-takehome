import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

	return (
		<>
			{applicant === undefined ? (
				''
			) : (
				<div>
					{applicant.map((info) => (
						<div key={uuidv4()}>
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
