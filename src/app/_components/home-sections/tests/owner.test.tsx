import React from 'react';
import { render, screen } from '@testing-library/react';
import Owner from '../owner';

// Mocking the Chart and CustomLink components
vi.mock('../../shared-ui/chart', () => ({
  __esModule: true,
  default: ({ head }) => (
    <div data-testid={`chart-${head.replace(/\s+/g, '-').toLowerCase()}`}>
      <h4>{head}</h4>
    </div>
  ),
}));

vi.mock('../../navigation/custom-link', () => ({
  __esModule: true,
  default: ({ href, children }) => <a href={href}>{children}</a>,
}));

describe('Owner Component', () => {
  const user = { name: 'John Doe' };
  const admins = [
    { id: 1, name: 'Admin One', tickets: 5 },
    { id: 2, name: 'Admin Two', tickets: 3 },
  ];

  it('renders the welcome message and introductory text', () => {
    render(<Owner admins={admins} user={user} />);

    expect(screen.getByText(`Welcome ${user.name}!`)).toBeInTheDocument();
    expect(
      screen.getByText(
        'Connect with your customers faster and more effectively with our all-in-one platform',
      ),
    ).toBeInTheDocument();
  });

  it('renders the charts', () => {
    render(<Owner admins={admins} user={user} />);

    expect(screen.getByTestId('chart-integrated-channels')).toBeInTheDocument();
    expect(
      screen.getByTestId('chart-customer-satisfaction'),
    ).toBeInTheDocument();
    expect(screen.getByTestId('chart-categories')).toBeInTheDocument();
  });
});

