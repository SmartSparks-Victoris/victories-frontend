import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Chart from '../chart'; // Adjust the import based on your file structure

vi.mock('react-chartjs-2', () => ({
  Pie: vi.fn(() => <div>Mocked Pie Chart</div>),
}));

describe('Chart', () => {
  const mockProps = {
    labels: ['Label 1', 'Label 2'],
    values: [10, 20],
    colors: ['#FF6384', '#36A2EB'],
    head: 'Test Chart',
  };

  it('renders the chart with the correct header', () => {
    render(<Chart {...mockProps} />);

    const header = screen.getByText('Test Chart');
    expect(header).toBeInTheDocument();
  });

  it('renders the Pie chart component', () => {
    render(<Chart {...mockProps} />);

    const pieChart = screen.getByText('Mocked Pie Chart');
    expect(pieChart).toBeInTheDocument();
  });

  it('sets the chart container width based on window size', () => {
    // Mock window.innerWidth
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 800,
    });

    render(<Chart {...mockProps} />);

    const chartContainer = screen.getByText('Test Chart').parentElement;
    expect(chartContainer).toHaveStyle('width: 100%');
  });

  it('updates windowWidth on resize', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1200,
    });

    const { rerender } = render(<Chart {...mockProps} />);

    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));

    rerender(<Chart {...mockProps} />);

    const chartContainer = screen.getByText('Test Chart').parentElement;
    expect(chartContainer).toHaveStyle('width: 100%');
  });
});

