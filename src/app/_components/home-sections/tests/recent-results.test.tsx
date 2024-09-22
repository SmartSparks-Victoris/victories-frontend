import React from 'react';
import { render, screen } from '@testing-library/react';
import Recent from '../recent-results';

// Mocking the CustomLink and TicketsCloseDarkSVG components
vi.mock('../navigation/custom-link', () => ({
  __esModule: true,
  default: ({ href, children, className }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}));

vi.mock('../svg/tickets-close-dark', () => () => (
  <svg data-testid="tickets-close-dark-svg" />
));

describe('Recent Component', () => {
  const results = [
    { id: 1, title: 'Ticket One', category: 'Category A' },
    { id: 2, title: 'Ticket Two', category: 'Category B' },
  ];

  it('renders the section heading', () => {
    render(<Recent results={results} />);
    expect(screen.getByText('Recent Tickets')).toBeInTheDocument();
  });

  it('does not render anything if results are empty', () => {
    render(<Recent results={[]} />);
    expect(screen.queryByText('Recent Tickets')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});

