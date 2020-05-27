import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ render: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (window.localStorage.getItem('auth')) {
					return <Component {...props} />;
				} else {
					return <Redirect to='/' />;
				}
			}}
		/>
	);
};
