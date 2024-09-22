import React from 'react';
import { render, screen } from '@testing-library/react';
import Admin from '../admin';

// Mock the child components
vi.mock('../admin-results', () => {
  return {
    __esModule: true,
    default: ({ results }) => (
      <div>Results Mock: {JSON.stringify(results)}</div>
    ),
  };
});

vi.mock('../recent-results', () => {
  return {
    __esModule: true,
    default: ({ results }) => <div>Recent Mock: {JSON.stringify(results)}</div>,
  };
});

vi.mock('../../shared-ui/results-head', () => {
  return {
    __esModule: true,
    default: ({ text }) => <h2>{text}</h2>,
  };
});

vi.mock('../ticket-item', () => {
  return {
    __esModule: true,
    default: ({ text }) => <div>{text}</div>,
  };
});

describe('Admin Component', () => {
  const mockResults = [{ id: '1', title: 'Test Ticket 1' }];
  const mockRecent = [{ id: '2', title: 'Recent Ticket 1' }];

  it('renders correctly with provided results and recent tickets', () => {
    render(<Admin results={mockResults} recent={mockRecent} />);

    expect(screen.getByText('Unopened Tickets')).toBeInTheDocument();
    expect(screen.getByText('In Progress Tickets')).toBeInTheDocument();
    expect(screen.getByText('Completed Tickets')).toBeInTheDocument();
    expect(screen.getByText('Urgent Tickets')).toBeInTheDocument();

    expect(screen.getByText('Tickets')).toBeInTheDocument();

    expect(
      screen.getByText(`Results Mock: ${JSON.stringify(mockResults)}`),
    ).toBeInTheDocument();

    expect(
      screen.getByText(`Recent Mock: ${JSON.stringify(mockRecent)}`),
    ).toBeInTheDocument();
  });
});

