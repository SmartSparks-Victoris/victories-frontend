// app/components/__tests__/Spinner.test.tsx
import { render, screen } from '@testing-library/react';
import Spinner from '../spinner';

describe('Spinner Component', () => {
  test('renders the spinner and loading text', () => {
    render(<Spinner />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    const spinner = screen.getByRole('paragraph');
    expect(spinner).toBeInTheDocument();
  });
});

