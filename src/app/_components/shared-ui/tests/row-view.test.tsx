// app/components/__tests__/RowView.test.tsx
import { render, screen } from '@testing-library/react';
import RowView from '../row-view';

describe('RowView Component', () => {
  const mockData = {
    img: 'https://example.com/image.png',
    name: 'John Doe',
    number: '12345',
    tickets: 5,
    date: '2023-09-22',
    id: 'abc123',
  };

  test('renders without crashing when no data is provided', () => {
    render(<RowView data={{}} type="admin" href="/" />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  test('calls onClick when ActionButton is clicked in admin type', () => {
    const handleClick = vi.fn();
    render(
      <RowView data={mockData} type="admin" onClick={handleClick} href="/" />,
    );

    const actionButton = screen.getByText(/delete/i);
    actionButton.click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

