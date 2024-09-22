import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NewForm from './form';
import { z } from 'zod';

// Mocking the schema for testing
const mockSchema = z.object({
  fname: z.string().min(1, 'First Name is required'),
  lname: z.string().min(1, 'Last Name is required'),
  email: z.string().email('Invalid email'),
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

// Mocking the `useForm` and `zodResolver` functions
vi.mock('react-hook-form', () => ({
  useForm: vi.fn(() => ({
    register: vi.fn(),
    handleSubmit: (onSuccess, onError) => (data) => {
      // Simulate success
      if (mockSchema.safeParse(data).success) {
        onSuccess(data);
      } else {
        onError(mockSchema.safeParse(data).error.flatten());
      }
    },
    formState: { errors: {} },
  })),
}));

describe('NewForm Component', () => {
  it('renders the form correctly', () => {
    render(<NewForm />);

    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/UserName/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('');
  });
});

