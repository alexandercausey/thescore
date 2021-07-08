import React from 'react';
import PlaygroupTile from './PlaygroupTile.jsx';
import './Playgroup.css';

function Playgroup({ playgroups, handlePlaygroupSelect }) {
  return (
    <div className="playgroup">
      {playgroups.map((playgroup, index) => {
          return(
              <PlaygroupTile className="tile" playgroup={playgroup} index={index} handlePlaygroupSelect={handlePlaygroupSelect} key={playgroup.name} />
          )
      })}
    </div>
  )
}

export default Playgroup;