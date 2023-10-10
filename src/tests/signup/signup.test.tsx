import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignupForm from '../../components/forms/signup/signup.form';
import { LoadingProvider } from '../../context/loading/loading.context';

jest.mock('../../context/auth/auth.context', () => ({
    useAuthContext: () => ({
        signup: jest.fn(),
    }),
}));

test('User can signup successfully', async () => {

    const { getByTestId } = render(
        <LoadingProvider>
            <SignupForm />
        </LoadingProvider>
    );

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
        expect(jest.fn()).toHaveBeenCalledWith({ username, email, password });
    });
});
