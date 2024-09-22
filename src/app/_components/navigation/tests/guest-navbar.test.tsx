import { render, screen } from '@testing-library/react';
import GuestNavbar from '../guest-navbar';

describe('GuestNavbar', () => {
  beforeEach(() => {
    render(<GuestNavbar />);
  });

  test('renders the navbar with logo and menu items', () => {
    expect(screen.getByRole('presentation')).toBeInTheDocument();

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Join/i })).toBeInTheDocument();
  });
});

