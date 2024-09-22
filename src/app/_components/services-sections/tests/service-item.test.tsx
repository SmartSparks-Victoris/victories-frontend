// ServiceItem.test.tsx

import { render, screen } from '@testing-library/react';
import ServiceItem from '../service-item';

// Mock data for the test
const mockService = {
  id: '1',
  img: '/images/service.png',
  title: 'Test Service',
  description: 'This is a test service description.',
};

describe('ServiceItem', () => {
  it('renders the service item correctly', () => {
    render(<ServiceItem service={mockService} />);

    const images = screen.getAllByRole('presentation');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('src', mockService.img);
    expect(images[1]).toHaveAttribute('src', mockService.img);
  });
});

