import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { createUserWithEmailAndPassword } from '@/lib/firebase/firebase.lib';
import SignupForm from '@/components/forms/signup/signup.form';

jest.mock('@/lib/firebase/firebase.lib');

test('User can signup successfully', async () => {

    const { getByTestId } = render(<SignupForm />);
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
        expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(username, email, password,);
    });
});
