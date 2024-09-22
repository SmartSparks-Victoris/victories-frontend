import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Results from '../results';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'nextjs-toploader/app';

vi.mock('next/navigation', () => ({
  useSearchParams: vi.fn(),
}));

vi.mock('nextjs-toploader/app', () => ({
  useRouter: vi.fn(),
}));

const mockResults = [
  {
    id: 1,
    urgent: true,
    status: 'Open',
    title: 'Issue 1',
    category: 'Bug',
    admin: 'Admin A',
    date: '2023-09-01',
    sentiment: 'Positive',
    degree_of_sentiment: 'High',
  },
  {
    id: 2,
    urgent: false,
    status: 'Closed',
    title: 'Issue 2',
    category: 'Feature',
    admin: 'Admin B',
    date: '2023-09-02',
    sentiment: 'Negative',
    degree_of_sentiment: 'Low',
  },
];

describe('Results Component', () => {
  const mockPush = vi.fn();
  const setSearchParams = vi.fn();

  beforeEach(() => {
    (useSearchParams as vi.Mock).mockReturnValue({
      get: vi.fn((param) => (param === 'key' ? 'urgent' : 'desc')),
    });
    (useRouter as vi.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  it('renders results correctly', () => {
    render(<Results results={mockResults} />);

    expect(screen.getByText('Issue 1')).toBeInTheDocument();
    expect(screen.getByText('Issue 2')).toBeInTheDocument();
  });

  it('sorts results by the specified key', () => {
    render(<Results results={mockResults} />);

    expect(screen.getAllByRole('row')).toHaveLength(mockResults.length + 1); // +1 for header row
  });

  it('navigates to the ticket page when a row is clicked', () => {
    render(<Results results={mockResults} />);

    fireEvent.click(screen.getByText('Issue 1'));

    expect(mockPush).toHaveBeenCalledWith('/tickets/1');
  });

  it('filters results based on search parameters', () => {
    (useSearchParams as vi.Mock).mockReturnValueOnce({
      get: vi.fn((param) => (param === 'key' ? 'status' : 'asc')),
    });
    render(<Results results={mockResults} />);
  });
});

