import React from 'react';
import PlaygroupTile from './PlaygroupTile.jsx';

function Playgroup({ playgroups, handlePlaygroupSelect }) {
  return (
    <div>
      {playgroups.map((playgroup, index) => {
        <div onClick={handlePlaygroupSelect}>
        <PlaygroupTile playgroup={playgroup} />
        </div>
      })}
    </div>
  )
}

export default Playgroup;