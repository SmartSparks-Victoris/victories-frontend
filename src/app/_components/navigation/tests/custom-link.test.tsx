import { render, screen, fireEvent } from '@testing-library/react';
import CustomLink from '../custom-link';
import '@testing-library/jest-dom';
import { useRouter } from 'nextjs-toploader/app';

describe('CustomLink', () => {
  const mockPush = vi.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  it('renders as a button and calls router.push on click', () => {
    const mockHref = '/about';
    const mockText = 'Go to About';

    render(<CustomLink href={mockHref}>{mockText}</CustomLink>);

    const button = screen.getByText(mockText);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockPush).toHaveBeenCalledWith(mockHref);
  });

  it('renders as a custom Button component when type is "button"', () => {
    const mockHref = '/contact';
    const mockText = 'Contact Us';

    render(
      <CustomLink href={mockHref} type="button">
        {mockText}
      </CustomLink>,
    );

    const customButton = screen.getByText(mockText);
    expect(customButton).toBeInTheDocument();
    fireEvent.click(customButton);
    expect(mockPush).toHaveBeenCalledWith(mockHref);
  });
});

