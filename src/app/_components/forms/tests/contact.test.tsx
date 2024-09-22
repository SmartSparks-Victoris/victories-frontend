import { render, screen } from '@testing-library/react';
import ContactForm from '../contact';

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

describe('ContactForm Component', () => {
  beforeEach(() => {
    render(<ContactForm />);
  });

  test('renders contact form', () => {
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Your Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Your Email')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Enter Your Message'),
    ).toBeInTheDocument();
  });
});

