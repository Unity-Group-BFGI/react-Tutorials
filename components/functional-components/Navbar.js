import React from 'react';

const date = new Date();
const hours = date.getHours();
const mins = date.getMinutes();
const sec = date.getSeconds();

const styles = {
  color:"deeppink",
  "background-color": "blue",
  }
  


function Navbar(){
  return (
    <div>
      <h3 className="myH3">THIS IS Navbar</h3>
    </div>
  )
}
export default Navbar;