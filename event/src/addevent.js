import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddEvent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., store event in database)
     // Simulate storing the event in a database
     const newEvent = {
        id: //,
        title,
        description,
        dueDate,
      };
      AddEvent(newEvent);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1 className="text-center mb-4">Add Event</h1>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Event Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dueDate" className="form-label">Due Date</label>
        <input
          type="date"
          className="form-control"
          id="dueDate"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Event</button>
    </form>
  );
  
}

AddEvent.propTypes = {
    onAddEvent: PropTypes.func.isRequired,
  };
  
  export default AddEvent;
