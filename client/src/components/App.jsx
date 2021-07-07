import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'Menu.jsx';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      playgroups: [],
      currentPlaygroup: null;
      players: [],
      page: 'playgroup',
      menuSelected: false,
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(e) {
    e.preventDefault();
    const newState = this.state;
    newState.page = e.target.value;
    newState.menuSelected = false;
    this.setState(newState);
  }
  handlePlayersChange(name, portraitUrl, index) {
    const newState = this.state;

  }
  render() {
    return (
      <div>
        <h1>The Score</h1>
        <button className="menu"></button>
        {this.state.menuSelected === true &&
        <Menu changePage={this.handlePageChange} />
        }
        {this.state.page === 'playgroup' &&
        <Playgroup players={this.state.players} />
        }
        {this.state.page === 'player' &&
        <Player />
        }
        {this.state.page === 'game' &&
        <Game />
        }
        {this.state.page === 'stats' &&
        <Stats />
        }
      </div>
    )
  }
}


export default App;