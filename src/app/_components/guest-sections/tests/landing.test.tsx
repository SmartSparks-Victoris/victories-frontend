import React from 'react';
import { render, screen } from '@testing-library/react';
import Landing from '../landing';

vi.mock('../../navigation/custom-link', () => {
  return {
    default: ({ children }) => <a>{children}</a>,
  };
});

describe('Landing Component', () => {
  const mockHead = 'About';

  it('renders the heading and link correctly', () => {
    render(<Landing Head={mockHead} />);

    expect(screen.getByText(mockHead)).toBeInTheDocument();

    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});

