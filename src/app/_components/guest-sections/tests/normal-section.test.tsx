import React from 'react';
import { render, screen } from '@testing-library/react';
import NormalSection from '../normal-section';

// Mock the CustomLink component
vi.mock('../navigation/custom-link', () => {
  return {
    __esModule: true,
    default: ({ children }) => <a>{children}</a>,
  };
});

describe('NormalSection Component', () => {
  const mockProps = {
    Head: 'Welcome to Our Service',
    body: 'We provide the best solutions for your needs.',
    buttonValue: 'Learn More',
    href: '/learn-more',
    src: '/images/service.png',
  };

  it('renders the heading, body, and button correctly', () => {
    render(<NormalSection {...mockProps} />);

    expect(screen.getByText(mockProps.Head)).toBeInTheDocument();

    expect(screen.getByText(mockProps.body)).toBeInTheDocument();

    expect(screen.getByText(mockProps.buttonValue)).toBeInTheDocument();
  });

  it('renders the image with correct src', () => {
    render(<NormalSection {...mockProps} />);

    const img = screen.getByAltText('');
    expect(img).toHaveAttribute('src', mockProps.src);
  });
});

