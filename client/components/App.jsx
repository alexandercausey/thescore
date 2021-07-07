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
  }

  render() {
    return (
      <div>
        <h1>The Score</h1>
        <button className="menu"></button>
        {this.state.menuSelected === true &&
        <Menu />
        }
      </div>
    )
  }
}


ReactDOM.render(App, document.getElementById('app'));