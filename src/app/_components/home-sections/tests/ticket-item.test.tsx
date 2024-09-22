import React from 'react';
import { render, screen } from '@testing-library/react';
import TicketItem from '../ticket-item';

// Mocking the SVG components
vi.mock('../../svg/completed-ticket', () => ({
  default: () => <svg data-testid="completed-ticket-svg" />,
}));
vi.mock('../../svg/inprogress-ticket', () => ({
  default: () => <svg data-testid="inprogress-ticket-svg" />,
}));
vi.mock('../../svg/open-ticket', () => ({
  default: () => <svg data-testid="open-ticket-svg" />,
}));
vi.mock('../../svg/urgent-ticket', () => ({
  default: () => <svg data-testid="urgent-ticket-svg" />,
}));

describe('TicketItem Component', () => {
  const props = {
    type: 'open',
    text: 'Open Tickets',
    number: 10,
    percentage: 50,
    href: '/tickets?status=1',
  };

  it('renders the TicketItem correctly for "inProgress" type', () => {
    render(<TicketItem {...{ ...props, type: 'inProgress' }} />);

    expect(screen.getByTestId('inprogress-ticket-svg')).toBeInTheDocument();
  });

  it('renders the TicketItem correctly for "completed" type', () => {
    render(<TicketItem {...{ ...props, type: 'completed' }} />);

    expect(screen.getByTestId('completed-ticket-svg')).toBeInTheDocument();
  });

  it('renders the TicketItem correctly for "urgent" type', () => {
    render(<TicketItem {...{ ...props, type: 'urgent' }} />);

    expect(screen.getByTestId('urgent-ticket-svg')).toBeInTheDocument();
  });
});

