import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignupForm from '../../components/forms/signup/signup.form';
import { AuthProvider } from '../../context/auth/auth.context';
import { LoadingProvider } from '../../context/loading/loading.context';

const mockSignup = jest.fn();

const renderLoginForm = () => {
    return render(
        <LoadingProvider>
            <AuthProvider>
                <SignupForm />
            </AuthProvider>
        </LoadingProvider>
    );
};

test('User can signup successfully', async () => {

    const { getByTestId } = renderLoginForm();

    const username = 'Devburna';
    const email = 'devburna@gmail.com';
    const password = 'devburna@gmail.com';

    const usernameInput = getByTestId('username');
    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const submitButton = getByTestId('submit');

    fireEvent.change(usernameInput, { target: { value: username } });
    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(mockSignup).toHaveBeenCalledWith({ username, email, password });
    });
});
