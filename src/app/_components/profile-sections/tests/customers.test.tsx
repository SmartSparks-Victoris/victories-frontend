import React from 'react';
import { render, screen } from '@testing-library/react';
import Customers from '../customers';

vi.mock('../../shared-ui/row-view', () => {
  const RowView = ({ href, data }) => (
    <div role="link" href={href}>
      <img src={data.img} alt={`Customer ${data.id}`} />
      <p>{data.number}</p>
    </div>
  );

  return { default: RowView };
});

describe('Customers Component', () => {
  it('renders the Customers section with the correct heading', () => {
    render(<Customers />);
    expect(screen.getByText('Customers')).toBeInTheDocument();
  });

  it('renders the correct number of customer RowView components', () => {
    render(<Customers />);
    const customerItems = screen.getAllByRole('link');
    expect(customerItems).toHaveLength(3); // Adjust based on the number of mock customers
  });

  it('displays the correct customer details', () => {
    render(<Customers />);
    const customerNumbers = ['01094774383', '01094734383', '01194774383'];
    customerNumbers.forEach((number) => {
      expect(screen.getByText(number)).toBeInTheDocument();
    });
  });
});

