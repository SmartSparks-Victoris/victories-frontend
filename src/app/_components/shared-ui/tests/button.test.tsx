import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from '../button';

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button onClick={vi.fn()}>Click Me</Button>);

    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'cursor-pointer py-[12px] px-5 sm:px-[104px] rounded-md text-[24px]',
    );
  });

  it('renders as a submit button', () => {
    render(<Button type="submit" value="Submit" />);

    const submitButton = screen.getByDisplayValue('Submit');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
  });

  it('calls onClick when button is clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies solid variant classes', () => {
    render(
      <Button variant="solid" variantColor="none">
        Solid Button
      </Button>,
    );

    const button = screen.getByText('Solid Button');
    expect(button).toHaveClass(
      'bg-textNavBarPrimary text-textButtonSecondary font-semibold',
    );
  });

  it('applies outline variant classes', () => {
    render(
      <Button variant="outline" variantColor="dark">
        Outline Button
      </Button>,
    );

    const button = screen.getByText('Outline Button');
    expect(button).toHaveClass(
      'border-1 border-surfaceTertiary text-surfaceTertiary font-semibold',
    );
  });

  it('applies default variant classes', () => {
    render(<Button>Default Button</Button>);

    const button = screen.getByText('Default Button');
    expect(button).toHaveClass(
      'bg-[url("/images/service-background.png")] bg-cover font-medium text-textNavBarPrimary',
    );
  });

  it('merges additional classes', () => {
    render(<Button className="extra-class">Extra Class Button</Button>);

    const button = screen.getByText('Extra Class Button');
    expect(button).toHaveClass('extra-class');
  });
});

