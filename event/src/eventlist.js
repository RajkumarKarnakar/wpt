import React from 'react';

function EventList({ events }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Event Title</th>
          <th scope="col">Description</th>
          <th scope="col">Due Date</th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id}>
            <td>{event.title}</td>
            <td>{event.description}</td>
            <td>{event.dueDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EventList;
