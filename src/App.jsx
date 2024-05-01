import React, { useEffect, useState } from 'react';
import { Home } from './Pages/Home';
import { NewEntry } from './Pages/NewEntry';
import { Route, Routes } from 'react-router-dom';
import { NavbarComp } from './components/NavbarComp';
import axios from 'axios';

const App = () => {

  const [entry, setEntry] = useState([])
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/posts").then(response => {
      setEntry(response.data.data)
      console.log(entry)

    })
  }, [])



  // const handleEntryAdded = () => {
  //   // setEntries([...entries, entry]);
  //   setEntries([...entries, entry]);
  //   console.log(entries)
  // };
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home entries={entries} />} />
        {/* <Route path="/newentry" element={<NewEntry onEntryAdded={handleEntryAdded} />} /> */}
      </Routes>
    </>
  );
};

export default App;

