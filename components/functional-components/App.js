import React from 'react';
import Navbar from './Navbar';
function App(){
  return (
    <div>
      <Navbar />
      <ul>
        <li><input type="checkbox" /> This is first task</li>
        <li><input type="checkbox" /> This is second task</li>
        <li><input type="checkbox" /> This is third task</li>
        <li><input type="checkbox" /> This is forth task</li>
        <li><input type="checkbox" /> This is fifth task</li>
      </ul>
    </div> 
  )
}
export default App;