import React from 'react';
import { render, screen } from '@testing-library/react';
import WhiteSection from '../white-section';

vi.mock('../navigation/custom-link', () => {
  return {
    __esModule: true,
    default: ({ children }) => <a>{children}</a>,
  };
});

describe('WhiteSection Component', () => {
  const mockProps = {
    Head: 'Discover Our Features',
    body: 'Explore the amazing capabilities of our service.',
    buttonValue: 'Get Started',
    href: '/get-started',
    src: '/images/features.png',
  };

  it('renders the heading, body, and button correctly', () => {
    render(<WhiteSection {...mockProps} />);

    expect(screen.getByText(mockProps.Head)).toBeInTheDocument();

    expect(screen.getByText(mockProps.body)).toBeInTheDocument();

    expect(screen.getByText(mockProps.buttonValue)).toBeInTheDocument();
  });

  it('renders the image with correct src', () => {
    render(<WhiteSection {...mockProps} />);

    const img = screen.getByAltText('');
    expect(img).toHaveAttribute('src', mockProps.src);
  });
});

