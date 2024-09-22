import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import DeleteModal from '../delete-modal';

describe('DeleteModal', () => {
  const mockOnClose = vi.fn();
  const mockAdmin = { name: 'John Doe' };

  it('renders correctly when shown', () => {
    render(<DeleteModal show={true} onClose={mockOnClose} admin={mockAdmin} />);

    expect(screen.getByText('Delete Admin')).toBeInTheDocument();
    expect(
      screen.getByText(/Are you sure you want to delete John Doe?/),
    ).toBeInTheDocument();
  });

  it('does not render when not shown', () => {
    const { container } = render(
      <DeleteModal show={false} onClose={mockOnClose} admin={mockAdmin} />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('closes modal when clicking outside', () => {
    render(<DeleteModal show={true} onClose={mockOnClose} admin={mockAdmin} />);

    fireEvent.mouseDown(document);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});

