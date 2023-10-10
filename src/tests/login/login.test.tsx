import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '../../components/forms/login/login.form';
import { LoadingProvider } from '../../context/loading/loading.context';

jest.mock('../../context/auth/auth.context', () => ({
    useAuthContext: () => ({
        login: jest.fn(),
    }),
}));

test('User can login successfully', async () => {

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

    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(jest.fn()).toHaveBeenCalledWith({ email, password });
    });
});
