// Footer.test.tsx
import { render, screen } from '@testing-library/react';
import Footer from '../footer';

describe('Footer', () => {
  test('renders the logo and company name', () => {
    render(<Footer />);

    // Check for logo image
    const logo = screen.getByAltText('');
    expect(logo).toBeInTheDocument();

    // Check for company name
    const companyName = screen.getByText('Smart Sparks');
    expect(companyName).toBeInTheDocument();
  });

  test('renders quick links with correct text', () => {
    render(<Footer />);

    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const servicesLink = screen.getByText('Services');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
  });

  test('renders contact information', () => {
    render(<Footer />);

    // Check for phone and email contact
    const phoneContact = screen.getByText('+201098536400');
    const emailContact = screen.getByText('name@gmail.com');

    expect(phoneContact).toBeInTheDocument();
    expect(emailContact).toBeInTheDocument();
  });

  test('renders copyright text with current year', () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      `© ${currentYear} Smart Sparks, All Right Reserved`,
    );
    expect(copyrightText).toBeInTheDocument();
  });
});

