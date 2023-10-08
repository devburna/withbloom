import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { signInWithEmailAndPassword } from '@/lib/firebase/firebase.lib';
import LoginForm from '@/components/forms/login/login.form';

jest.mock('@/lib/firebase/firebase.lib');

test('User can login successfully', async () => {

    const { getByTestId } = render(<LoginForm />);
    const email = 'devburna@gmail.com';
    const password = 'devburna@gmail.com';

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const submitButton = getByTestId('submit');

    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(signInWithEmailAndPassword).toHaveBeenCalledWith(email, password,);
    });
});
