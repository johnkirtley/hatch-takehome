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

export const SignUp = (props) => {
	const [credentials, setCredentials] = useState(initialState);
	const [confirmPassword, setConfirmPassword] = useState({
		confirmPassword: '',
	});

	const handleChanges = (e) => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		});
		console.log(credentials);
	};

	const confirm = (e) => {
		setConfirmPassword({
			...confirmPassword,
			[e.target.name]: e.target.value,
		});
		console.log(confirmPassword);
	};

	const submitCredentials = (e) => {
		e.preventDefault();
		if (credentials.password === confirmPassword.confirmPassword) {
			window.localStorage.setItem('username', credentials.password);
			window.localStorage.setItem('password', credentials.password);
			props.history.push('/login');
		} else {
			alert('Passwords Do Not Match!');
		}
	};

	return (
		<div style={{ width: '75%', margin: 'auto', marginTop: '5rem' }}>
			<h2 style={{ textAlign: 'center' }}>Sign Up</h2>
			<Form {...layout}>
				<Form.Item
					label='Username'
					htmlFor='username'
					rules={[{ required: true, message: 'Please Enter a Username' }]}>
					<Input onChange={handleChanges} name='username' />
				</Form.Item>
				<Form.Item
					label='Password'
					htmlFor='password'
					rules={[{ required: true, message: 'Please Enter a Password' }]}>
					<Input onChange={handleChanges} name='password' type='password' />
				</Form.Item>
				<Form.Item
					label='Confirm Password'
					htmlFor='confirmPassword'
					rules={[{ required: true, message: 'Please Reenter Your Password' }]}>
					<Input onChange={confirm} name='confirmPassword' type='password' />
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
