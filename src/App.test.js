import { fireEvent, screen } from '@testing-library/react';
import App from './App';
import { renderWithProvider } from './utils/test/renderWithProvider';

describe('App', () => {
  test('should contain a registration form with the following inputs', () => {
    renderWithProvider(<App />);
    const registrationElement = screen.getByText(/registration form/i);
    expect(registrationElement).toBeInTheDocument();
    expect(screen.getByTestId("registration-form")).toBeInTheDocument()
    expect(screen.getByTestId("email")).toBeInTheDocument()
    expect(screen.getByTestId("password")).toBeInTheDocument()
  });

  test('On page load, if no setting has been made initially, the modal should be prompted to the user immediately.', () => {
    renderWithProvider(<App />);
    expect(screen.getByTestId("settings-modal")).toBeInTheDocument();
  });

  test('If no setting is made initially, all input fields and button should be disabled.', () => {
    renderWithProvider(<App />);
    expect(screen.getByTestId("settings-modal")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled()
  });

  test('the password field would pick its validation from the checkboxes in the settings modal.', () => {
    renderWithProvider(<App />);
    const passwordInput = screen.getByTestId("password")
    const emailInput = screen.getByTestId("email")
    const submitButton = screen.getByRole("button", { name: "Submit" })
    const applyButton = screen.getByRole("button", { name: "Apply" })

    expect(submitButton).toBeDisabled()
    expect(passwordInput).toBeDisabled()
    expect(emailInput).toBeDisabled()
    expect(screen.getByTestId("settings-modal")).toBeInTheDocument();

    // Select a criteria
    fireEvent.click(screen.getByTestId('At least 1 uppercase'))
    fireEvent.click(applyButton)

    // fill registration form
    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } })
    fireEvent.change(passwordInput, { target: { value: "password" } }) // enter an invalid password
    expect(submitButton).toBeDisabled()
    fireEvent.change(passwordInput, { target: { value: "Password" } }) // enter a valid password
    expect(submitButton).toBeEnabled()
  });
})
