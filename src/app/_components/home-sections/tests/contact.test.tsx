import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactSection from '../contact';

vi.mock('../svg/address', () => () => <svg data-testid="address-svg" />);
vi.mock('../svg/message', () => () => <svg data-testid="message-svg" />);
vi.mock('../svg/phone', () => () => <svg data-testid="phone-svg" />);

describe('ContactSection Component', () => {
  it('renders correctly with all contact items', () => {
    render(<ContactSection />);

    expect(screen.getByText('Contact Us')).toBeInTheDocument();

    expect(
      screen.getByText(/Feel free to reach out to us/i),
    ).toBeInTheDocument();

    expect(screen.getByText('Phone: +123-456-7890')).toBeInTheDocument();
    expect(screen.getByText('Address: 123 City Country')).toBeInTheDocument();
    expect(screen.getByText('Email:1234t@gmail.com')).toBeInTheDocument();
  });
});

