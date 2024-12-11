import React, { useState } from 'react';
import ConfigurationForm from './components/ConfigurationForm';
import TicketDisplay from './components/TicketDisplay';
import LogDisplay from './components/LogDisplay';
import ControlButtons from './components/ControlButtons';
import SetForm from './components/SetForm';
import './App.css';

function App() {
  const [logs, setLogs] = useState([]);

  return (
    <div className="app-container">
      <h1>Real Time Ticket Selling System</h1>
      <div className="form-display-container">
        <div className="form-section">
          <ConfigurationForm />
          <SetForm />
          <ControlButtons setLogs={setLogs} />
        </div>
        <div className="display-section">
          <LogDisplay logs={logs} />
          <TicketDisplay />
        </div>
      </div>
    </div>
  );
}

export default App;




// import React, { useState } from 'react';
// import ConfigurationForm from './components/ConfigurationForm';
// import TicketDisplay from './components/TicketDisplay';
// import LogDisplay from './components/LogDisplay';
// import ControlButtons from './components/ControlButtons';
// import SetForm from './components/SetForm';
// import './App.css';

// function App() {
//   const [logs, setLogs] = useState([]);
//   const [ticketCount, setTicketCount] = useState(0);

//   return (
//     <div className="app-container">
//       <h1>Real Time Ticket Selling System</h1>
//       <div className="form-display-container">
//         <div className="form-section">
//           <ConfigurationForm />
//           <SetForm />
//           <ControlButtons setLogs={setLogs} setTicketCount={setTicketCount} />
//         </div>
//         <div className="display-section">
//           <TicketDisplay ticketCount={ticketCount} />
//           <LogDisplay logs={logs} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
