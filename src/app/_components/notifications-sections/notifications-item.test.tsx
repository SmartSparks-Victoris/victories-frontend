import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './notification-item';

vi.mock('../svg/notification-finger', () => ({
  default: () => <div data-testid="notification-finger" />,
}));

vi.mock('../svg/time', () => ({
  default: () => <div data-testid="time-svg" />,
}));

vi.mock('../shared-ui/label', () => ({
  default: ({ type, children }) => (
    <span data-testid={`label-${type}`}>{children}</span>
  ),
}));

describe('NotificationItem Component', () => {
  const defaultProps = {
    type: 'info',
    typeValue: 'New Update',
    time: '2 mins ago',
    head: 'System Notification',
    description: 'You have a new message.',
  };

  it('renders notification item correctly', () => {
    render(<NotificationItem {...defaultProps} />);

    expect(screen.getByTestId('notification-finger')).toBeInTheDocument();

    expect(screen.getByTestId('time-svg')).toBeInTheDocument();

    expect(screen.getByTestId('label-info')).toHaveTextContent('New Update');

    expect(screen.getByText('2 mins ago')).toBeInTheDocument();
    expect(screen.getByText('System Notification')).toBeInTheDocument();
    expect(screen.getByText('You have a new message.')).toBeInTheDocument();
  });
});

