import { DruxtClient } from 'druxt';
import { Component } from 'react';

import './App.css';

const druxt = new DruxtClient('https://demo-api.druxtjs.org')

class App extends Component {
  constructor() {
    super();
    this.state = { entity: [] };
  }

  async componentDidMount() {
    const entity = [(await druxt.getResource('node--page', 'f09d8d5f-4998-4811-8fd1-05647f1c85d9')).data]
    this.setState({ entity })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Druxt example:<br />
          {this.state.entity.map(e => JSON.stringify(e.attributes))}
        </header>
      </div>
    );
  }
}

export default App;
