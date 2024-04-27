import React, { useState } from 'react';
import { Home } from './Pages/Home';
import { NewEntry } from './Pages/NewEntry';
import { Route, Routes } from 'react-router-dom';
import { NavbarComp } from './components/NavbarComp';

const App = () => {
  const [entries, setEntries] = useState([]);

  const handleEntryAdded = (newEntry) => {
    setEntries([...entries, newEntry]);
  };
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home entries={entries}/>} />
        <Route path="/newentry" element={<NewEntry onEntryAdded={handleEntryAdded}  />} />
      </Routes>
    </>
  );
};

export default App;

