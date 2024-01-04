import React from 'react';
import AddEvent from './addevent';
import EventList from './eventlist';
import  {useState} from 'react';
import PropTypes from 'prop-types';


function App() {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (newEvent) => {
    setEvents([...events, newEvent]);
    console.log(events)
  };

  return (
    <div className="container">
      <AddEvent onAddEvent={handleAddEvent} />
      <EventList events={events} />
    </div>
  );
}
export default App;
