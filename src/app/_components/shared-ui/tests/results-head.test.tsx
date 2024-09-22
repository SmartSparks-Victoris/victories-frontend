// app/components/__tests__/ResultsHead.test.tsx
import { render, screen } from '@testing-library/react';
import ResultsHead from '../results-head';

describe('ResultsHead Component', () => {
  test('renders with text and no results', () => {
    render(<ResultsHead text="Test Results" />);

    const heading = screen.getByText(/test results/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders total amount when result is provided', () => {
    render(<ResultsHead text="Test Results" result="$100" />);

    const totalAmount = screen.getByText(/total amount: \$100/i);
    expect(totalAmount).toBeInTheDocument();
  });

  test('renders total result when results are provided', () => {
    render(<ResultsHead text="Test Results" results={[1, 2, 3]} />);

    const totalResult = screen.getByText(/total result: 3/i);
    expect(totalResult).toBeInTheDocument();
  });

  test('renders nothing when no result or results provided', () => {
    render(<ResultsHead text="Test Results" />);

    const totalAmount = screen.queryByText(/total amount/i);
    const totalResult = screen.queryByText(/total result/i);
    expect(totalAmount).not.toBeInTheDocument();
    expect(totalResult).not.toBeInTheDocument();
  });
});

