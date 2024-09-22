import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filters from '../filters';
import { vi } from 'vitest';
import { useRouter } from 'nextjs-toploader/app';
import { useSearchParams } from 'next/navigation';

// Mocking the useRouter hook
vi.mock('nextjs-toploader/app', () => ({
  useRouter: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  useSearchParams: vi.fn(),
}));

describe('Filters Component', () => {
  const mockPush = vi.fn();
  const mockSearchParams = new URLSearchParams();

  beforeEach(() => {
    useRouter.mockReturnValue({ push: mockPush });
    useSearchParams.mockReturnValue(mockSearchParams);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the Filters component', () => {
    render(
      <Filters
        categories={[{ id: 1, name: 'Category 1' }]}
        status={[{ id: 1, name: 'Open' }]}
        numberOfResults={5}
      />,
    );

    expect(screen.getByText(/Total Results: 5/i)).toBeInTheDocument();
  });
});

