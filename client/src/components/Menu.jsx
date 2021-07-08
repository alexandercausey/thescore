import React from 'react';
import './Menu.css';

function Menu({changePage}) {
  const handleClick = (e) => {
    e.preventDefault();
    changePage(e.target.value);
  }
  return (
    <div className="menu">
      <button className="playgroup" onClick={handleClick} value="playgroup">Select Playgroup</button>
      <button className="player" onClick={handleClick} value="player">Add/Remove Players</button>
      <button className="game" onClick={handleClick} value="game">Log Game</button>

    </div>
  )
}

export default Menu;