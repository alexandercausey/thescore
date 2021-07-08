import React from 'react';

function Menu({changePage}) {
  const handleClick = (e) => {
    e.preventDefault();
    changePage(e.target.value);
  }
  return (
    <div>
      <button className="playgroup" onClick={handleClick} value="playgroup">Select Playgroup</button>
    </div>
  )
}

export default Menu;