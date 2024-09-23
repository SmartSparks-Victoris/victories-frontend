import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Admin from '../admin';

vi.mock('../shared-ui/delete-modal', () => ({ show, onClose }) => (
  <div data-testid="delete-modal" style={{ display: show ? 'block' : 'none' }}>
    <button onClick={onClose}>Close</button>
  </div>
));

vi.mock('../shared-ui/row-view', () => ({ onClick, data }) => (
  <div onClick={onClick} data-testid="row-view">
    {data.name}
    <button data-testid="delete-button">Delete</button>
  </div>
));

vi.mock('../../_utils/helpers', () => ({
  convertToDateString: (date) => 'Mock Date', // Mock the date output
}));

describe('Admin Component', () => {
  const mockAdmin = { id: 1, name: 'Test Admin', date: '2024-09-22' };

  it('renders correctly', () => {
    render(<Admin admin={mockAdmin} token={'A'} />);

    expect(screen.getByText('Test Admin')).toBeInTheDocument();
  });
});

