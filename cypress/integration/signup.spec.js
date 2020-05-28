describe('Loads Sign Up Page', () => {
	it('loads page', () => {
		cy.visit('/signup');
	});
});

describe('Signup Accepts Email Input', () => {
	it('accepts user input', () => {
		const user = 'User';
		cy.get(
			':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input'
		)
			.type(user)
			.should('have.value', user);
	});
});

describe('Signup Accepts Password Input', () => {
	it('accepts password input', () => {
		const password = 'Password';
		cy.get(
			':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input'
		)
			.type(password)
			.should('have.value', password);
	});
});

describe('Signup Accepts Confirm Password Input', () => {
	it('accepts confirm password input', () => {
		const confirmPass = 'Password';
		cy.get(
			':nth-child(3) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input'
		)
			.type(confirmPass)
			.should('have.value', confirmPass);
	});
});

describe('Signup Button Works', () => {
	it('click button and directs to Login', () => {
		cy.get('.ant-btn').click();
	});
});
