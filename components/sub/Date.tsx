// components/DateRangeComponent.js

import React from 'react';

const DateRangeComponent = () => {
  // Set the start and end dates
  const startDate = new Date('2024-03-14');
  const endDate = new Date('2024-03-17');

  // Format the dates to display only month and year
  const options = { month: 'long', year: 'numeric', day: 'numeric' };

  const formattedStartDate = startDate.toLocaleDateString('en-US');
  const formattedEndDate = endDate.toLocaleDateString('en-US');

  return (
    <div>
      <p className='font-normal text-3xl'>{formattedStartDate} - {formattedEndDate}</p>
    </div>
  );
};

export default DateRangeComponent;
