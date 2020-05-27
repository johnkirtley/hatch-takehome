import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 8 },
};

const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

const initialState = {
	username: '',
	password: '',
};

export const Login = (props) => {
	const [login, setLogin] = useState(initialState);

	const handleChanges = (e) => {
		setLogin({
			...login,
			[e.target.name]: e.target.value,
		});
	};

	const submitCredentials = (e) => {
		e.preventDefault();

		const registeredUsername = window.localStorage.getItem('username');
		const registeredPassword = window.localStorage.getItem('password');

		if (
			login.username === registeredUsername &&
			login.password === registeredPassword
		) {
			window.localStorage.setItem('auth', true);
			props.history.push('/applicants');
		} else {
			alert('Invalid Credentials!');
		}
	};

	return (
		<div style={{ width: '75%', margin: 'auto', marginTop: '5rem' }}>
			<h2 style={{ textAlign: 'center' }}>Login</h2>
			<Form {...layout}>
				<Form.Item
					label='Username'
					htmlFor='username'
					rules={[{ required: true, message: 'Please Enter a Username' }]}>
					<Input name='username' onChange={handleChanges} />
				</Form.Item>
				<Form.Item
					label='Password'
					htmlFor='password'
					rules={[{ required: true, message: 'Please Enter a Password' }]}>
					<Input name='password' onChange={handleChanges} />
				</Form.Item>
				<Form.Item {...tailLayout} htmlType='submit'>
					<Button type='primary' onClick={submitCredentials}>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
