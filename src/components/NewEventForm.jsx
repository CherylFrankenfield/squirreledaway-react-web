import React from 'react';

function NewEventForm() {
  const newFormStyles = {
    backgroundColor: '#529967'
  }

  return(
    <div>
      <form style={newFormStyles}>
        <label>Name: </label>
        <input
          type='text'
          id='name'/>
        <label>Date: </label>
        <input
          type='text'
          id='date'/>
        <label>Location: </label>
        <input
          type='text'
          id='location'/>
        <label>Price: </label>
        <input
          type='text'
          id='price'/>
        <label>Notes: </label>
        <textarea
          type='text'
          id='notes'/>
      </form>
    </div>
  );
}

export default NewEventForm;
