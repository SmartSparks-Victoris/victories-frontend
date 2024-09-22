import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ImageUpload from '../image-upload';

global.fetch = vi.fn();

describe('ImageUpload Component', () => {
  const userId = 'test-user-id';

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders with initial image URL', () => {
    const initialImageUrl = '/images/test.png';
    render(<ImageUpload initialImageUrl={initialImageUrl} userId={userId} />);

    expect(screen.getByAltText('Profile Preview')).toHaveAttribute(
      'src',
      initialImageUrl,
    );
  });

  it('opens modal when an image file is selected', async () => {
    const { getByLabelText } = render(<ImageUpload userId={userId} />);
    const fileInput = getByLabelText(/upload picture/i);

    const file = new File(['dummy content'], 'image.png', {
      type: 'image/png',
    });
    Object.defineProperty(fileInput, 'files', { value: [file] });

    fireEvent.change(fileInput);

    await waitFor(() => {
      expect(screen.getByText(/new picture/i)).toBeInTheDocument();
    });
  });

  it('uploads the image when Confirm button is clicked', async () => {
    const { getByLabelText, getByText } = render(
      <ImageUpload userId={userId} />,
    );
    const fileInput = getByLabelText(/upload picture/i);

    const file = new File(['dummy content'], 'image.png', {
      type: 'image/png',
    });
    Object.defineProperty(fileInput, 'files', { value: [file] });

    fireEvent.change(fileInput);

    await waitFor(() => {
      expect(screen.getByText(/new picture/i)).toBeInTheDocument();
    });

    (fetch as vi.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ imageUrl: '/images/uploaded.png' }),
    });

    fireEvent.click(getByText(/confirm/i));

    await waitFor(() => {
      expect(screen.getByAltText('Profile Preview')).toHaveAttribute(
        'src',
        '/images/uploaded.png',
      );
    });
  });

  it('cancels the upload and resets the image', async () => {
    const initialImageUrl = '/images/test.png';
    const { getByLabelText, getByText } = render(
      <ImageUpload initialImageUrl={initialImageUrl} userId={userId} />,
    );
    const fileInput = getByLabelText(/upload picture/i);

    const file = new File(['dummy content'], 'image.png', {
      type: 'image/png',
    });
    Object.defineProperty(fileInput, 'files', { value: [file] });

    fireEvent.change(fileInput);

    await waitFor(() => {
      expect(screen.getByText(/new picture/i)).toBeInTheDocument();
    });

    fireEvent.click(getByText(/cancel/i));

    expect(screen.getByAltText('Profile Preview')).toHaveAttribute(
      'src',
      initialImageUrl,
    );
  });
});

