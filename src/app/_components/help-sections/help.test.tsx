import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Help from './help';

describe('Help Component', () => {
  it('renders the heading and video correctly', () => {
    render(<Help />);

    const heading = screen.getByRole('heading', {
      name: /A Comprehensive Visual Guide to Streamlining and Managing All Your Account Settings/i,
    });
    expect(heading).toBeInTheDocument();

    const video = screen.getByTestId('help-video');
    expect(video).toBeInTheDocument();

    const source = video.querySelector('source');
    expect(source).toHaveAttribute('src', '/images/help.mp4');
    expect(source).toHaveAttribute('type', 'video/mp4');
  });
});

