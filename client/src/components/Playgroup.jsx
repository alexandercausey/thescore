import React from 'react';
import PlaygroupTile from './PlaygroupTile.jsx';

function Playgroup({ playgroups, handlePlaygroupSelect }) {
  return (
    <div className="playgroup">
      {playgroups.map((playgroup, index) => {
        console.log(playgroup);
          return(
            // <div onClick={handlePlaygroupSelect(index)} key={playgroup.name + index}>
              <PlaygroupTile playgroup={playgroup} key={playgroup.name} />
            // </div>
          )
      })}
    </div>
  )
}

export default Playgroup;