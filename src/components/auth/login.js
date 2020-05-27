import React from 'react';
import { Form, Input, Button } from 'antd';

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 8 },
};

const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

export const Login = () => {
	return (
		<div style={{ width: '75%', margin: 'auto', marginTop: '5rem' }}>
			<h2 style={{ textAlign: 'center' }}>Login</h2>
			<Form {...layout}>
				<Form.Item
					label='Username'
					name='username'
					rules={[{ required: true, message: 'Please Enter a Username' }]}>
					<Input />
				</Form.Item>
				<Form.Item
					label='Password'
					name='password'
					rules={[{ required: true, message: 'Please Enter a Password' }]}>
					<Input />
				</Form.Item>
				<Form.Item {...tailLayout}>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
