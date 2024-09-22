import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Pricing from '../pricing';
import { useRouter } from 'nextjs-toploader/app';
import { useSearchParams } from 'next/navigation';

// Mocking the useRouter and useSearchParams hooks
vi.mock('nextjs-toploader/app', () => ({
  useRouter: vi.fn(),
}));

vi.mock('next/navigation', () => ({
  useSearchParams: vi.fn(),
}));

// Mocking the Payment and MessageAndRedirect components
vi.mock('./payment', () => {
  return ({ total, handleNext }) => (
    <div>
      <p>Payment Component - Total: {total}</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
});

vi.mock('../shared-ui/temp-component', () => {
  return ({ nextPage, src, text, text2 }) => (
    <div>
      <img src={src} alt="Success" />
      <p>{text}</p>
      <p>{text2}</p>
      <a href={nextPage}>Go Home</a>
    </div>
  );
});

describe('Pricing Component', () => {
  const mockPush = vi.fn();
  const mockSearchParams = new URLSearchParams();

  beforeEach(() => {
    useRouter.mockReturnValue({ push: mockPush });
    useSearchParams.mockReturnValue(mockSearchParams);

    render(<Pricing />);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the pricing component with the correct heading and description', () => {
    expect(
      screen.getByText(/Choose the Plan That Fits Your Business Needs/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /Whether you are a small business or a large enterprise, we have a plan that suits your customer service requirements/i,
      ),
    ).toBeInTheDocument();
  });

  it('changes duration to annual and updates URL parameters', () => {
    fireEvent.click(screen.getByRole('button', { name: /Annual/i }));

    expect(mockPush).toHaveBeenCalledWith(
      expect.stringContaining('duration=annual'),
    );
  });
});

