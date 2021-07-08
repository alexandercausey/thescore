import React from 'react';

function Playgroup({ playgroups, handlePlaygroupSelect }) {
  render() {
    <div>
      {playgroups.map((playgroup, index) => {
        <PlaygroupTile playgroup={playgroup} onClick={handlePlaygroupSelect(index)} />
      })}
    </div>
  }
}