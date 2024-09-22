import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ActionButton from '../action';

describe('ActionButton', () => {
  it('renders with default type', () => {
    render(<ActionButton onClick={vi.fn()} />);

    const button = screen.getByText('Delete');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'text-openStroke bg-openColor border-openStroke',
    );
  });

  it('renders with type "inProgress"', () => {
    render(<ActionButton onClick={vi.fn()} type="inProgress" />);

    const button = screen.getByText('In Progress');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'text-inProgressStroke bg-inProgressColor border-inProgressStroke',
    );
  });

  it('renders with type "completed"', () => {
    render(<ActionButton onClick={vi.fn()} type="completed" />);

    const button = screen.getByText('Completed');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'text-completedStroke bg-completedColor border-completedStroke',
    );
  });

  it('calls onClick function when clicked', () => {
    const handleClick = vi.fn();
    render(<ActionButton onClick={handleClick} />);

    const button = screen.getByText('Delete');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

