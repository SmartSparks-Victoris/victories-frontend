// app/components/__tests__/MessageAndRedirect.test.tsx
import { render, screen } from '@testing-library/react';
import { useRouter } from 'nextjs-toploader/app';
import MessageAndRedirect from '../temp-component';

// Mock the useRouter hook
vi.mock('nextjs-toploader/app', () => ({
  useRouter: vi.fn(),
}));

describe('MessageAndRedirect Component', () => {
  const mockRouterPush = vi.fn();

  beforeEach(() => {
    (useRouter as vi.Mock).mockReturnValue({ push: mockRouterPush });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('renders correctly with provided text and image', () => {
    render(
      <MessageAndRedirect
        nextPage="/next"
        src="/path/to/image.jpg"
        text="This is a message"
        text2="This is a second message"
      />,
    );

    expect(screen.getByText(/this is a message/i)).toBeInTheDocument();
    expect(screen.getByText(/this is a second message/i)).toBeInTheDocument();
    expect(screen.getByAltText('')).toHaveAttribute(
      'src',
      '/path/to/image.jpg',
    );
  });

  test('redirects to the next page after 5 seconds', () => {
    vi.useFakeTimers();

    render(
      <MessageAndRedirect
        nextPage="/next"
        src="/path/to/image.jpg"
        text="This is a message"
      />,
    );

    vi.advanceTimersByTime(5000);

    expect(mockRouterPush).toHaveBeenCalledWith('/next');

    vi.useRealTimers();
  });
});

