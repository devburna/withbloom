import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '../../components/forms/login/login.form';
import { LoadingProvider } from '../../context/loading/loading.context';
import { useAuthContext } from '../../context/auth/auth.context';

// Mock the useAuthContext hook to provide a mock login function
jest.mock('../../context/auth/auth.context', () => ({
    useAuthContext: () => ({
        login: jest.fn(),
    }),
}));

describe('User can login successfully', () => {
    it('submits login form with user data', async () => {
        // Render the LoginForm component wrapped in LoadingProvider
        const { getByTestId } = render(
            <LoadingProvider>
                <LoginForm />
            </LoadingProvider>
        );

        const email = 'devburna@gmail.com';
        const password = 'devburna@gmail.com';

        const emailInput = getByTestId('email');
        const passwordInput = getByTestId('password');
        const submitButton = getByTestId('submit');

        // Simulate user input
        fireEvent.change(emailInput, { target: { value: email } });
        fireEvent.change(passwordInput, { target: { value: password } });

        // Simulate form submission
        fireEvent.click(submitButton);

        // Wait for the login function to be called with the provided email and password
        await waitFor(() => {
            expect(useAuthContext().login).toHaveBeenCalledWith({ email, password });
        });
    });
});
