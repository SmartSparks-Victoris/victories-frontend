// ServicesSection.test.tsx

import { render, screen } from '@testing-library/react';
import ServicesSection from '../services';
import servicesData from '@/app/_data/services';

vi.mock('../service-item', () => {
  return {
    __esModule: true,
    default: ({ service }) => (
      <div data-testid="service-item">
        <img src={service.img} alt={service.title} />
        <h2>{service.title}</h2>
        <p>{service.description}</p>
      </div>
    ),
  };
});

describe('ServicesSection', () => {
  it('renders the section with the correct title and services', () => {
    render(<ServicesSection />);

    expect(
      screen.getByText(/What We Offer to Improve Customer Support/i),
    ).toBeInTheDocument();

    const serviceItems = screen.getAllByTestId('service-item');
    expect(serviceItems).toHaveLength(servicesData.length); // Ensure it matches the number of services
  });

  it('renders the correct service titles and descriptions', () => {
    render(<ServicesSection />);

    servicesData.forEach((service) => {
      expect(screen.getByText(service.title)).toBeInTheDocument();
      expect(screen.getByText(service.description)).toBeInTheDocument();
    });
  });
});

