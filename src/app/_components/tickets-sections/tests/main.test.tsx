import React from 'react';
import { render, screen } from '@testing-library/react';
import TicketsMain from '../main';
import { vi } from 'vitest';

// Mock the Filters and Results components
vi.mock('../filters', () => {
  const Filters = ({ categories, status, numberOfResults }) => (
    <div data-testid="filters">
      <p>Categories: {JSON.stringify(categories)}</p>
      <p>Status: {JSON.stringify(status)}</p>
      <p>Total Results: {numberOfResults}</p>
    </div>
  );
  return { default: Filters };
});

vi.mock('../results', () => {
  const Results = ({ results, setLength }) => (
    <div data-testid="results">
      <p>Results: {JSON.stringify(results)}</p>
    </div>
  );
  return { default: Results };
});

describe('TicketsMain Component', () => {
  const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
  ];
  const status = [
    { id: 1, name: 'Open' },
    { id: 2, name: 'Closed' },
  ];
  const results = [
    { id: 1, title: 'Ticket 1' },
    { id: 2, title: 'Ticket 2' },
  ];

  it('renders the TicketsMain component with Filters and Results', () => {
    render(
      <TicketsMain categories={categories} status={status} results={results} />,
    );

    expect(screen.getByTestId('filters')).toBeInTheDocument();
    expect(screen.getByText(/Categories:/)).toHaveTextContent(
      JSON.stringify(categories),
    );
    expect(screen.getByText(/Status:/)).toHaveTextContent(
      JSON.stringify(status),
    );
    expect(screen.getByText(/Total Results:/)).toHaveTextContent(
      String(results.length),
    );

    expect(screen.getByTestId('results')).toBeInTheDocument();
  });
});

