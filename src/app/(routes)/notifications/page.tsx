import React from 'react';
import ResultsHead from '@/app/_components/shared-ui/results-head';
import NotificationItem from '@/app/_components/notifications-sections/notification-item';

const page = () => {
  return (
    <div>
      <ResultsHead text={'Notifications'} />
      <div className="flex flex-col gap-[32px]">
        <NotificationItem type={'danger'} typeValue={'New Ticket'} time='12 Sept 2024 at 4:30 PM' head='New Ticket Received' description={'A new ticket has been received from [Customer Name]. Please review it'} />
        <NotificationItem type={'success'} typeValue={'Completed'} time='12 Sept 2024 at 4:30 PM' head='Customer Satisfaction Feedback' description={'[Customer Name] has rated your service [5 stars]. Check the details.'} />
        <NotificationItem type={'success'} typeValue={'Completed'} time='12 Sept 2024 at 4:30 PM' head='Customer Satisfaction Feedback' description={'[Customer Name] has rated your service [5 stars]. Check the details.'} />
        <NotificationItem type={'danger'} typeValue={'New Ticket'} time='12 Sept 2024 at 4:30 PM' head='Ticket Assigned to You' description={'A new ticket has been assigned to you. Please start reviewing it'} />
        <NotificationItem type={'danger'} typeValue={'New Ticket'} time='12 Sept 2024 at 4:30 PM' head='Ticket Assigned to You' description={'A new ticket has been assigned to you. Please start reviewing it'} />
      </div>
    </div>
  );
};

export default page;

