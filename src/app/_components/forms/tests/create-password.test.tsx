import { render, screen } from '@testing-library/react';
import CreatePassword from '../create-password';

// Mock the TextInput and Button components
vi.mock('../shared-ui/text-input', () => {
  return ({ register, name, error, label, placeholder }) => (
    <div>
      <label htmlFor={name}>{label}</label>
      <input {...register(name)} placeholder={placeholder} />
      {error && <p className="error">{error.message}</p>}
    </div>
  );
});

vi.mock('../shared-ui/button', () => {
  return ({ children }) => <button type="submit">{children}</button>;
});

describe('CreatePassword Component', () => {
  const mockSetStep = vi.fn();

  beforeEach(() => {
    render(
      <CreatePassword
        setStep={mockSetStep}
        username="testuser"
        mobile="1234567890"
      />,
    );
  });

  test('renders the CreatePassword form', () => {
    expect(screen.getByText('Create New Password')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Enter your New password'),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Confirm your New password'),
    ).toBeInTheDocument();
  });
});

