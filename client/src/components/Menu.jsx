import React from 'react';

function Menu({changePage}) {
  handleClick(e) {
    e.preventDefault();
    changePage(e);
  }
  return (
    <div>
      <button className="playgroup" onClick={handleClick} value="playgroup">Select Playgroup</button>
    </div>
  )
}

export default Menu;