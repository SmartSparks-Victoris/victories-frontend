import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Chat from '../chat';

vi.mock('../../svg/send', () => ({
  __esModule: true, // This allows using default export
  default: () => <svg data-testid="send-icon" />,
}));

const mockTicket = {
  user_number: '12345',
  messages: [
    { id: '1', type: 'customer', content: 'Hello', time: '10:00 AM' },
    { id: '2', type: 'support', content: 'Hi there!', time: '10:01 AM' },
  ],
};

describe('Chat Component', () => {
  test('renders correctly with ticket information', () => {
    render(<Chat ticket={mockTicket} />);

    expect(screen.getByText('12345')).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('Hi there!')).toBeInTheDocument();
  });
});

