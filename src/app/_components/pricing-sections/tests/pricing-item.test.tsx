import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import PricingItem from '../pricing-item';

// Mocking the Button component
vi.mock('../../shared-ui/button', () => {
  return {
    __esModule: true,
    default: ({ onClick, children, className }) => (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    ),
  };
});

describe('PricingItem Component', () => {
  const handlePlanChangeMock = vi.fn();
  const pricingProps = {
    type: 'Basic',
    price: 20,
    description: 'Basic plan description',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    handlePlanChange: handlePlanChangeMock,
  };

  beforeEach(() => {
    render(<PricingItem {...pricingProps} />);
  });

  it('renders the pricing item correctly', () => {
    expect(
      screen.getByRole('button', { name: /Get Started For Basic/i }),
    ).toBeInTheDocument();
  });

  it('calls handlePlanChange on button click', () => {
    fireEvent.click(
      screen.getByRole('button', { name: /Get Started For Basic/i }),
    );

    expect(handlePlanChangeMock).toHaveBeenCalledWith('Basic', 20);
  });
});

