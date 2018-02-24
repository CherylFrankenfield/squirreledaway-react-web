import React from 'react';
import EventList from './EventList';
import NewEventForm from './NewEventForm';

function Body() {
  return(
    <div>
      <EventList />
      <NewEventForm />
    </div>
  );
}

export default Body;
