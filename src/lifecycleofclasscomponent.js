import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello');
  }
  state={
    count: 0,
  };

  add = () => {
    this.setState(current => ({ 
      count: this.state.count + 1, 
    }));
  };

  minus = () => {
    this.setState(current => ({ 
      count: this.state.count - 1, 
    }));
  };

  componentDidMount() {
    console.log('component rendered');
  }

  componentDidUpdate() {
    console.log("I'm just updated");
  }

  componentWillUnmount() {
    console.log("Goodbye Cruel world");
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>the number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
