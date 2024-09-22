import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import JoinForm from '../join';

// Mock the hooks and external components used in JoinForm
vi.mock('@/app/_hooks/useAnimation', () => ({
  __esModule: true,
  default: () => ({
    isStepTransitionComplete: true,
    setIsStepTransitionComplete: vi.fn(),
    handleExitComplete: vi.fn(),
    animationVariants: {},
  }),
}));

vi.mock('../shared-ui/message-and-redirect', () => () => (
  <div>Mocked Message and Redirect</div>
));

describe('JoinForm', () => {
  beforeEach(() => {
    render(<JoinForm />);
  });

  it('renders the initial step of the form', () => {
    expect(
      screen.getByText(/Tell Us About Your Business/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter Business Name/i),
    ).toBeInTheDocument();
  });
});

