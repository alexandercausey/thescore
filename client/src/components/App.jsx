import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu.jsx';
import Game from './Game.jsx';
import Player from './Player.jsx';
import Playgroup from './Playgroup.jsx';
import Stats from './Stats.jsx';
import commanders from '/data/commanders.js';
import './App.css';


<iframe src="https://drive.google.com/uc?id=1ptnjelCZqKcQwuBFRRr7jji5F2w7Yu_m/preview" width="640" height="480" allow="autoplay"></iframe>

const data = {
  playgroups: [
    {
      id: 1,
      name: 'Buddies',
      logoUrl: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Magic_the_gathering-card_back.jpg',
      players:
      [
        {id: 1,
        name: 'Alex',
        portraitUrl: 'https://drive.google.com/uc?id=1W0wHx0ToH0gAupigUxeZuxj-whSUfJdt'
        },
        {id: 2,
          name: 'Ahmad',
          portraitUrl: 'https://drive.google.com/uc?id=1Q0_8UR2ueC32A_2VneJd3oTtPgu6qb8M'
        },
        {id: 3,
          name: 'David',
          portraitUrl: 'https://drive.google.com/uc?id=109DAVwdfAGO50r8uCUIjTcsowf9VXzUU'
        },
        {id: 4,
          name: 'Jimmy',
          portraitUrl: 'https://drive.google.com/uc?id=1BxS6vO8k0bwIADmaKu98XQuMVrL2uYi8'
        },
        {id: 5,
          name: 'Kevin',
          portraitUrl: 'https://drive.google.com/uc?id=1ptnjelCZqKcQwuBFRRr7jji5F2w7Yu_m'
        },
      ],
    }
  ],
  commanders: commanders
}

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      playgroups: data.playgroups,
      currentPlaygroup: 0,
      players: data.playgroups[0].players,
      page: '',
      menuSelected: false,
      commanders: data.commanders
    }
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handlePlaygroupSelect = this.handlePlaygroupSelect.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }
  handlePageChange(newPage) {
    const newState = {...this.state};
    newState.page = newPage;
    newState.menuSelected = false;
    this.setState(newState);
  }
  handlePlayersChange(name, portraitUrl, index) {
    const newState = {...this.state};

  }
  handlePlaygroupSelect(index) {
    const newState = {...this.state};
    newState.currentPlaygroup = index;
    newState.players = this.state.playgroups[this.state.currentPlaygroup].players;
    newState.page = 'game';
    this.setState(newState);
  }
  handleMenuClick(e) {
    e.preventDefault();
    const newState = {...this.state};
    newState.menuSelected = !newState.menuSelected;
    this.setState(newState);
  }
  render() {
    return (
      <div className="app">
        <div className="banner">
          <h1 className="header">The Score</h1>
          <button className="menubutton" onClick={this.handleMenuClick}><i className="fas fa-bars"></i></button>
        </div>
        {this.state.menuSelected === true &&
        <Menu changePage={this.handlePageChange} />
        }
        {this.state.page === "playgroup" &&
        <Playgroup playgroups={this.state.playgroups} handlePlaygroupSelect={this.handlePlaygroupSelect} />
        }
        {this.state.page === "player" &&
        <Player players={this.state.players} />
        }
        {this.state.page === 'game' &&
        <Game players={this.state.players} commanders={this.state.commanders} />
        }
        {this.state.page === 'stats' &&
        <Stats />
        }
      </div>
    )
  }
}


export default App;