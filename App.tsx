import React from 'react';
import { AgriSatEnterpriseDashboard } from './AgriSatEnterpriseDashboard';

/**
 * Root Application Assembly Layer for AgriSat AI
 * Mounts the high-fidelity ISRO-grade dashboard environment.
 */
function App() {
  return (
    <React.StrictMode>
      <AgriSatEnterpriseDashboard />
    </React.StrictMode>
  );
}

export default App;
