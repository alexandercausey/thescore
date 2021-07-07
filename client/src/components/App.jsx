import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      playgroup: '',
      players: [],
      page: 'playgroup',
      menuSelected: false,
    }
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(e) {
    e.preventDefault();
    const newState = this.state.page;
    newState.page = e.target.value;
    newState.menuSelected = false;
    this.setState(newState);
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
        <Playgroup />
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