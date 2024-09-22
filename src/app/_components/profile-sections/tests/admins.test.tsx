import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Admins from '../admins';

vi.mock('../../navigation/custom-link', () => {
  const CustomLink = ({ href, className, children }) => (
    <a href={href} className={className}>
      {children}
    </a>
  );
  return { default: CustomLink };
});

vi.mock('../../shared-ui/row-view', () => {
  const RowView = ({ href, data, onClick }) => (
    <div role="button" onClick={onClick}>
      <img src={data.img} alt={data.name} />
      <p>{data.name}</p>
      <p>{data.tickets} Tickets</p>
    </div>
  );
  return { default: RowView };
});

vi.mock('../../shared-ui/delete-modal', () => {
  const DeleteModal = ({ show, onClose, admin }) =>
    show ? (
      <div>
        <p>Are you sure you want to delete {admin?.name}?</p>
        <button onClick={onClose}>Close</button>
      </div>
    ) : null;
  return { default: DeleteModal };
});

describe('Admins Component', () => {
  beforeEach(() => {
    render(<Admins />);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders the Admins section with the correct heading and link', () => {
    expect(screen.getByText(/Admins/i)).toBeInTheDocument();
    expect(screen.getByText(/Add another admin/i)).toBeInTheDocument();
  });

  it('renders the admin list', () => {
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Jane Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Doe Joe/i)).toBeInTheDocument();
  });

  it('opens the delete modal when an admin row is clicked', () => {
    const adminRow = screen.getByText(/John Doe/i).closest('div');
    fireEvent.click(adminRow);

    expect(
      screen.getByText(/Are you sure you want to delete John Doe?/i),
    ).toBeInTheDocument();
  });

  it('closes the delete modal when close button is clicked', () => {
    const adminRow = screen.getByText(/John Doe/i).closest('div');
    fireEvent.click(adminRow);
    fireEvent.click(screen.getByRole('button', { name: /Close/i }));

    expect(
      screen.queryByText(/Are you sure you want to delete John Doe?/i),
    ).not.toBeInTheDocument();
  });
});

