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

describe('Admin Component', () => {
  const mockAdmin = { id: 1, name: 'Test Admin' };

  it('renders correctly', () => {
    render(<Admin admin={mockAdmin} />);

    expect(screen.getByText('Test Admin')).toBeInTheDocument();
  });
});

