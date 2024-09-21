'use client';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, { FC, useEffect, useState } from 'react';

import { ChartProps } from '@/app/_types/shared-ui.types';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart: FC<ChartProps> = ({ labels, values, colors, head }) => {
  const [windowWidth, setWindowWidth] = useState(1200); // Default initial width

  // Function to handle window resizing
  const handleResize = () => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  };

  // Add event listener for window resize on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set the initial width on the client side
      setWindowWidth(window.innerWidth);

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: ' Percentage: ',
        data: values,
        backgroundColor: colors,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div
      style={{
        width: windowWidth < 1100 ? '100%' : windowWidth < 1300 ? '45%' : '28%',
      }}>
      <h3 className="text-[#452033] text-[20px] font-bold mb-[16px]">{head}</h3>
      <div
        style={{
          width: '100%',
          border: '1px solid #231318',
          borderRadius: '12px',
          padding: '16px',
        }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart;

