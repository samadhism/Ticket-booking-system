import React from 'react';

function TicketDisplay({ ticketCount }) {
  return (
    <div className="ticket-display">
      <h2>Current Ticket Availability</h2>
      <textarea rows="1" readOnly value={`Tickets Available: ${ticketCount}`}></textarea>
    </div>
  );
}

export default TicketDisplay;
// import React from 'react';

// function TicketDisplay() {
//   return (
//     <div className="ticket-display">
//       <h2>Ticket Display</h2>
//       <textarea rows="10" readOnly placeholder="Ticket details will appear here..."></textarea>
//     </div>
//   );
// }

// export default TicketDisplay;
