import React from 'react';
import PlaygroupTile from './PlaygroupTile.jsx';

function Playgroup({ playgroups, handlePlaygroupSelect }) {
  render() {
    <div>
      {playgroups.map((playgroup, index) => {
        <PlaygroupTile playgroup={playgroup} onClick={handlePlaygroupSelect(index)} />
      })}
    </div>
  }
}

export default Playgroup;