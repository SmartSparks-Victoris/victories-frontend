import React from 'react';
import { render, screen } from '@testing-library/react';
import Customer from '../customer';

vi.mock('../../shared-ui/row-view', () => {
  return {
    default: vi.fn(() => <div>RowView Mock</div>),
  };
});

const mockCustomer = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
};

describe('Customer Component', () => {
  it('renders the customer information correctly', () => {
    render(<Customer customer={mockCustomer} />);

    expect(screen.getByText('RowView Mock')).toBeInTheDocument();
  });
});

