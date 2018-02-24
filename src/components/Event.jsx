import React from 'react';

function Event() {
  const eventStyles = {
    backgroundColor: '#E88222'
  }
  return(
    <div style={eventStyles}>
      <h1>Pedalpalooza</h1>
      <h4>Date: June </h4>
      <h4>Location: Rides around Portland,OR </h4>
      <h4>Price: Free </h4>
      <h4>Notes:</h4>
      <p>Visit <a href='http://www.shift2bikes.org/'>Pedalpalooza website</a> for more information. Find out when Get Lost, Loud and Lit, and Bowie vs. Prince rides are this year.</p>
    </div>
  );
}

export default Event;
