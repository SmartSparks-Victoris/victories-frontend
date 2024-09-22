import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ForgetPasswordComponent from './forget-password'; // Adjust the import as needed

describe('ForgetPasswordComponent', () => {
  beforeEach(() => {
    render(<ForgetPasswordComponent />);
  });

  test('renders ForgetPassword form on initial load', () => {
    expect(screen.getByText(/Find your account/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mobile/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send/i })).toBeInTheDocument();
  });

  test('navigates to VerificationForm on submitting ForgetPassword', async () => {
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Mobile/i), {
      target: { value: '1234567890' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Send/i }));

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: /Code Verification/i }),
      ).toBeInTheDocument();
    });
    fireEvent.click(screen.getByRole('button', { name: /Next/i }));
  });
});

