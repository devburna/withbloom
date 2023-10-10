import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '../../components/forms/signup/signup.form';
import { AuthProvider, useAuthContext } from '../../context/auth/auth.context';
import { LoadingProvider } from '../../context/loading/loading.context';

jest.mock('../../lib/firebase/firebase.lib');

test('User can login successfully', async () => {
    const authContext = useAuthContext();

    authContext.login = jest.fn().mockResolvedValue({});

    const { getByTestId } = render(<LoadingProvider>
        <AuthProvider><LoginForm /></AuthProvider>
    </LoadingProvider>);

    const email = 'devburna@gmail.com';
    const password = 'devburna@gmail.com';

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const submitButton = getByTestId('submit');

    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(jest.fn()).toHaveBeenCalledWith({ email, password });
    });
});
