import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ render: Component, ...rest }) => {
	const [authStatus, setAuthStatus] = useState();

	let authFlag = window.localStorage.getItem('auth');

	useEffect(() => {
		setAuthStatus(authFlag);
	}, [authFlag]);

	return (
		<Route
			{...rest}
			render={(props) => {
				if (authStatus) {
					return <Component {...props} />;
				} else {
					return <Redirect to='/' />;
				}
			}}
		/>
	);
};
