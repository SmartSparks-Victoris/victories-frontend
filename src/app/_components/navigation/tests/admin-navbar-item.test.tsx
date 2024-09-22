import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AdminNavbarItem from '../admin-navbar-item';
import { isActive } from '@/app/_utils/navigation';

vi.mock('../custom-link', () => ({
  default: ({ children, className }) => <a className={className}>{children}</a>,
}));

vi.mock('@/app/_utils/navigation', () => ({
  isActive: vi.fn(),
}));

describe('AdminNavbarItem', () => {
  const mockHref = '/test';
  const mockOpenIcon = () => <span>Open Icon</span>;
  const mockCloseIcon = () => <span>Close Icon</span>;

  it('renders the correct link and name', () => {
    (isActive as vi.Mock).mockReturnValue(false);

    render(
      <AdminNavbarItem
        href={mockHref}
        openIcon={mockOpenIcon}
        closeIcon={mockCloseIcon}
        name="Test Item"
      />,
    );

    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByText('Close Icon')).toBeInTheDocument();
  });

  it('does not apply active classes when the link is inactive', () => {
    (isActive as vi.Mock).mockReturnValue(false);

    render(
      <AdminNavbarItem
        href={mockHref}
        openIcon={mockOpenIcon}
        closeIcon={mockCloseIcon}
        name="Inactive Item"
      />,
    );

    const listItem = screen.getByTitle('Inactive Item');
    const link = screen.getByText('Close Icon');

    expect(listItem).toHaveClass('pl-4');
    expect(link).not.toHaveClass('bg-backgroundOpacity');
  });
});

