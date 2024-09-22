// GuestNavbarItem.test.tsx
import { render, screen } from '@testing-library/react';
import { usePathname } from 'next/navigation';
import GuestNavbarItem from '../guest-navbar-item';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

describe('GuestNavbarItem', () => {
  const mockHref = '/about';
  const mockText = 'About';

  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue('/');
  });

  test('renders the GuestNavbarItem with text', () => {
    render(<GuestNavbarItem href={mockHref} text={mockText} />);
    expect(screen.getByText(mockText)).toBeInTheDocument();
  });

  test('applies active styles when the path matches the href', () => {
    (usePathname as vi.Mock).mockReturnValue(mockHref);
    render(<GuestNavbarItem href={mockHref} text={mockText} />);
    const button = screen.getByText(mockText).closest('button');
    expect(button).toHaveClass('font-bold text-white');
  });

  test('applies inactive styles when the path does not match the href', () => {
    render(<GuestNavbarItem href={mockHref} text={mockText} />);
    const button = screen.getByText(mockText).closest('button');
    expect(button).toHaveClass('text-white/80');
  });
});

