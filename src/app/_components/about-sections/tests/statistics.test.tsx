import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import Statistics from '../statistics';

vi.mock('../statistics-item', () => ({
  default: () => <div>Statistics Item</div>,
}));

vi.mock('../../shared-ui/transition', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('Statistics Component', () => {
  it('renders correctly', () => {
    render(<Statistics />);

    const heading = screen.getByRole('heading', {
      name: /What we do different/i,
    });
    expect(heading).toBeInTheDocument();

    const paragraph = screen.getByText(/We combine user-centric design/i);
    expect(paragraph).toBeInTheDocument();

    const statisticsItems = screen.getAllByText(/Statistics Item/i);
    expect(statisticsItems.length).toBe(4);
  });

  it('contains the correct number of items', () => {
    render(<Statistics />);

    const items = screen.getAllByText(/Statistics Item/i);
    expect(items).toHaveLength(4);
  });
});

