import React, { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <h3>{event.summary}</h3>
      <p>{event.created}</p>
      <p>{event.location}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'hide details' : 'show details'}
      </button>
      {showDetails && <p>{event.description}</p>}
    </li>
  );
}

export default Event;