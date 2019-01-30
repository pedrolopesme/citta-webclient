import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    events: []
  }

  constructor(props) {
    super(props);
    this.onMessage.bind(this);
  }

  componentDidMount = () => {
    var evtSource = new EventSource('http://localhost:3030');
    evtSource.onmessage = this.onMessage;
  }

  onMessage = (e) => {
    console.log(`New message arrived ${e.data}`);
    this.setState((previousState) => {
      previousState.events.push(e.data);
      return { events: previousState.events};
    })
  }

  render() {
    return (
      <div className="App">
        <h3> Events </h3>
        {this.state.events.map((event) =>
          <div> {event} </div>
        )}
      </div>
    );
  }
}

export default App;
