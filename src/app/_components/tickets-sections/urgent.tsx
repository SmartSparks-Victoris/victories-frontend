import React, { FC } from 'react';

import { UrgentProps } from '@/app/_types/admin.types';

const Urgent: FC<UrgentProps> = ({ result }) => {
  async function handleUrgentChange(id: string | number, isChecked: boolean) {
    console.log('HANDLED');
    console.log(id);
    console.log(isChecked);
    // try {
    //   const response = await fetch(`/api/tickets/${id}/urgent`, {
    //     method: 'PATCH', // Use PATCH or PUT depending on your API
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ urgent: isChecked ? 1 : 0 }), // Send 1 for urgent, 0 for not urgent
    //   });
    //   if (!response.ok) {
    //     throw new Error('Failed to update urgent status');
    //   }
    //   // Optionally update the state if necessary
    //   const updatedResult = await response.json();
    //   setFilteredResults((prevResults) =>
    //     prevResults.map((result) =>
    //       result.id === id ? { ...result, urgent: updatedResult.urgent } : result
    //     )
    //   );
    //   // await revalidateLogin()
    // } catch (error) {
    //   console.error('Error updating urgent status:', error);
    // }
  }

  return (
    <>
      {result.urgent === 0 && result.status !== 'completed' && (
        <label
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'relative',
            display: 'inline-block',
          }}>
          <input
            type="checkbox"
            checked={result.urgent === 0}
            style={{ display: 'none' }} // Hide the default checkbox
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              e.stopPropagation();
              handleUrgentChange(result.id, e.target.checked);
            }}
          />
          <span className="custom-checkbox"></span>
        </label>
      )}
      {result.urgent === 1 && result.status !== 'completed' && (
        <label onClick={(e) => e.stopPropagation()}>
          <input
            type="checkbox"
            checked={result.urgent === 1}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => {
              e.stopPropagation();
              handleUrgentChange(result.id, e.target.checked);
            }}
          />
          <span className="custom-checkbox"></span>
        </label>
      )}
    </>
  );
};

export default Urgent;

