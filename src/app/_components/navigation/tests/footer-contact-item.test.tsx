import { render, screen } from '@testing-library/react';
import FooterContactItem from '../footer-contact-item';
import '@testing-library/jest-dom';

describe('FooterContactItem', () => {
  it('renders the children and text props', () => {
    const mockText = 'Contact Us';
    const mockChild = <svg data-testid="icon" />; // Mock an icon or any other child element

    render(<FooterContactItem text={mockText}>{mockChild}</FooterContactItem>);

    expect(screen.getByText(mockText)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('has the correct class for layout', () => {
    const mockText = 'Email Us';
    const mockChild = <svg data-testid="icon" />;

    const { container } = render(
      <FooterContactItem text={mockText}>{mockChild}</FooterContactItem>,
    );

    expect(container.firstChild).toHaveClass('flex gap-1 items-center');
  });
});

