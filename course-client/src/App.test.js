import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import axiosClient from "./axiosClient";

test('renders Login form initially', () => {
  const { getByText } = render(<App />);
  const loginForm = getByText("Login");
  expect(loginForm).toBeInTheDocument();
});

test('renders Courses page after successful login', () => {
  const axiosMock = new MockAdapter(axiosClient);

  const mockResponse = {
    user: {
      username: 'kedgette',
      email: "wow@fake.com",
      id: 10
    }
  };

  // TO-DO: Mock does not work as expected
  axiosMock.onPost("/login").reply(200, mockResponse);

  const { getByPlaceholderText, getByText } = render(<App />);
  const usernameField = getByPlaceholderText("Username");
  const emailField = getByPlaceholderText("Email");

  fireEvent.change(usernameField, { target: { value: 'kedgette'}});
  fireEvent.change(emailField, { target: { value: 'wow@fake.com'}});

  fireEvent.click(getByText('Log In'));

  waitFor(() => {
    expect(getByText("Courses")).toBeInTheDocument();
    expect(getByText(`Welcome: kedgette`)).toBeInTheDocument();
  });

});
