import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import { SignUp } from './components/auth/signup';
import { Login } from './components/auth/login';
import { PrivateRoute } from './components/auth/privateRoute';
import { MainView } from './components/mainView';
import { DetailedView } from './components/detailedView';

import './App.css';

const App = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(`https://private-041255-sakura3.apiary-mock.com/applicants`)
			.then((res) => {
				console.log(res.data);
				setData(res.data);
			})
			.catch((err) => console.log('Error fetching data', err));
	}, []);

	return (
		<>
			<Route path='/signup' component={SignUp} />
			<Route path='/login' component={Login} />
			<PrivateRoute
				exact
				path='/'
				render={(props) => <MainView {...props} data={data} />}
			/>
			<Route
				exact
				path='/:id'
				render={(props) => <DetailedView {...props} data={data} />}
			/>
		</>
	);
};

export default App;
