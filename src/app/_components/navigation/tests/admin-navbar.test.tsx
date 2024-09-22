import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import AdminNavbar from '../admin-navbar';
import { useRouter } from 'nextjs-toploader/app';
import { SocketContext } from '@/app/_contexts/socket-context'; // Adjust the import based on your structure

vi.mock('nextjs-toploader/app', () => ({
  useRouter: vi.fn(),
}));

vi.mock('react-hot-toast', () => ({
  success: vi.fn(),
}));

const MockSocketProvider = ({ children }) => {
  const mockSocket = {
    emit: vi.fn(),
  };

  return (
    <SocketContext.Provider value={{ socket: mockSocket }}>
      {children}
    </SocketContext.Provider>
  );
};

describe('AdminNavbar', () => {
  const mockPush = vi.fn();
  const mockUser = { fullname: 'John Doe', role: 'owner' };

  beforeEach(() => {
    (useRouter as vi.Mock).mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders user information and navigation links', () => {
    render(
      <MockSocketProvider>
        <AdminNavbar user={mockUser} />
      </MockSocketProvider>,
    );

    expect(screen.getByText('Smart Sparks')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Tickets')).toBeInTheDocument();
    expect(screen.getByText('Admins')).toBeInTheDocument();
    expect(screen.getByText('Customers')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Help')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
  });

  // it('calls handleLogout and redirects to home on logout', async () => {
  //   global.fetch = vi.fn(() => Promise.resolve({ ok: true })) as any;

  //   render(
  //     <MockSocketProvider>
  //       <AdminNavbar user={mockUser} />
  //     </MockSocketProvider>
  //   );

  //   const logoutButton = screen.getByTitle('Logout');
  //   fireEvent.click(logoutButton);

  //   expect(fetch).toHaveBeenCalledWith('http://localhost:3001/logout', {
  //     method: 'POST',
  //     credentials: 'include',
  //   });
  //   expect(mockPush).toHaveBeenCalledWith('/');
  //   expect(toast.success).toHaveBeenCalledWith('logged out successfully!');
  // });

  it('does not show Admins and Pricing for non-owner users', () => {
    const nonOwnerUser = { fullname: 'Jane Doe', role: 'user' };
    render(
      <MockSocketProvider>
        <AdminNavbar user={nonOwnerUser} />
      </MockSocketProvider>,
    );

    expect(screen.queryByText('Admins')).not.toBeInTheDocument();
    expect(screen.queryByText('Pricing')).not.toBeInTheDocument();
  });
});

