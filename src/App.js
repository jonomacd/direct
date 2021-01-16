import './App.css';
import Header from './Header';
import Content from './Content';
import Dexie from 'dexie'

function App() {
  const db = new Dexie('me');

  // create the store
  db.version(1).stores({ formData: 'id,value' })

  return (
    <div className="App">
      <Header />
      <Content db={db} />
    </div>
  );
}
export default App;


// import React, { useState } from 'react'
// import Dexie from 'dexie'

// import Form from './Form'

// const App = () => {
//   const [open, setOpen] = useState(true)

//   return (
//     <div style={{ margin: '2rem auto', width: '200px' }}>
//       <button onClick={() => setOpen(!open)}>{`${
//         open ? 'Close' : 'Open'
//       } Form`}</button>
//       {/* Pass in a new connection to the database when Form is first rendered */}
//       {open && <Form db={new Dexie('FormDatabase')} />}
//     </div>
//   )
// }

// export default App