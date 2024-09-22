import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PasswordForm from '../password-form';

vi.mock('../../shared-ui/text-input', () => {
  return {
    default: ({ label, register, error, type }) => (
      <div>
        <label>{label}</label>
        <input
          type={type}
          {...register(label.toLowerCase().replace(' ', '-'))}
        />
        {error && <span role="alert">{error.message}</span>}
      </div>
    ),
  };
});

vi.mock('../../shared-ui/button', () => {
  return {
    default: ({ type, value, className }) => (
      <button type={type} className={className}>
        {value}
      </button>
    ),
  };
});

describe('PasswordForm Component', () => {
  it('renders the password form correctly', () => {
    render(<PasswordForm />);

    expect(screen.getByRole('button', { name: /update/i })).toBeInTheDocument();
  });
});

