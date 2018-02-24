import React from 'react';
import Event from './Event';
import PropTypes from 'prop-types';

function EventList(props) {
  const eventListStyles = {
    backgroundColor: '#5DBA8B'
  }

  return(
    <div style={eventListStyles}>
      <h1>My Bucket List</h1>

      <Event />
    </div>
  );
}

EventList.propTypes = {
  bucketlist: PropTypes.array
};

export default EventList;
