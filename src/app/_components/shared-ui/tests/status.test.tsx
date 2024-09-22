// app/components/__tests__/Status.test.tsx
import { render, screen } from '@testing-library/react';
import Status from '../status';

describe('Status Component', () => {
  test('renders without status', () => {
    render(<Status status="" />);

    expect(
      screen.queryByText(/open|inProgress|completed/i),
    ).not.toBeInTheDocument();
  });
});

