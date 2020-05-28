describe('Loads Login Page', () => {
	it('visits application', () => {
		cy.visit('/');
	});
});

describe('Accepts Text Input', () => {
	it('allows you to enter username', () => {
		const user = 'User';
		cy.get(
			':nth-child(1) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input'
		)
			.type(user)
			.should('have.value', user);
	});
});

describe('Accepts Password Input', () => {
	it('allows you to enter a password', () => {
		const password = 'Password';
		cy.get(
			':nth-child(2) > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input'
		)
			.type(password)
			.should('have.value', password);
	});
});

describe('Login Button Works', () => {
	it('click button and directs to Applicant page', () => {
		cy.get('.ant-btn').click();
	});
});
