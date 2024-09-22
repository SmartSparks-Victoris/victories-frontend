import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import JoinSection from '../join';
vi.mock('../shared-ui/transition', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe('JoinSection Component', () => {
  it('renders correctly', () => {
    render(<JoinSection />);

    const heading = screen.getByRole('heading', {
      name: /We Are Always Ready To Take You To The Next Level/i,
    });
    expect(heading).toBeInTheDocument();

    const paragraph = screen.getByText(/Join Us Now/i);
    expect(paragraph).toBeInTheDocument();

    const customLink = screen.getByRole('button', { name: /Get Started/i });
    expect(customLink).toBeInTheDocument();
  });
});

