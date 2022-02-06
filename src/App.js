import './App.css';
import Header from './Header';
import Content from './Content';
import { initMe, updateMe } from './me';
import Dexie from 'dexie'
import React, { useEffect, useState } from "react";

function App() {
  const [me, setMe] = useState({});
  const db = useState(new Dexie('direct'))[0];

  
  useEffect(() => {
    // Initialize on DB connect
    initMe(db, setMe);
  }, [db]);

  // Update me in DB and state
  const onMeUpdate = me => { updateMe(db, me, setMe) };

  return (
    <div className="App">
      <Header me={me}/>
      <Content me={me} onMeUpdate={onMeUpdate} />
    </div>
  );
}

export default App;
