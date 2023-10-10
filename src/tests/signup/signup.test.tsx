import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignupForm from '../../components/forms/signup/signup.form';
import { AuthProvider, useAuthContext } from '../../context/auth/auth.context';
import { LoadingProvider } from '../../context/loading/loading.context';

jest.mock('../../lib/firebase/firebase.lib');

test('User can signup successfully', async () => {
    const authContext = useAuthContext();

    authContext.signup = jest.fn().mockResolvedValue({});

    const { getByTestId } = render(<LoadingProvider>
        <AuthProvider><SignupForm /></AuthProvider>
    </LoadingProvider>);

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
