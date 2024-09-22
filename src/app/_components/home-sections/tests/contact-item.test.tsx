import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactItem from '../contact-item';

describe('ContactItem Component', () => {
  it('renders correctly with given text and children', () => {
    const mockText = 'Contact Us';
    const mockChild = <span>Contact</span>;

    render(<ContactItem text={mockText}>{mockChild}</ContactItem>);

    expect(screen.getByText('Contact')).toBeInTheDocument();

    expect(screen.getByText(mockText)).toBeInTheDocument();
  });
});

