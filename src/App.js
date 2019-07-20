import React from 'react';
import SearchBarContainer from './components/containers/SearchBarContainer';
import TableContainer from './components/containers/TableContainer';
import SettingsContainer from './components/containers/SettingsContainer';

function App() {
  return (
    <div>
      <SearchBarContainer />
      <SettingsContainer />
      <TableContainer />
    </div>
  );
}

export default App;
