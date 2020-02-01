import React from 'react';
import AppChild from './AppChild.js'

class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      testmessage: 'this is a test message',
      prop1: 'prop 1 original state',
      prop2: 'prop 2 original state'
    };
    this.onChangeProp1 = this.onChangeProp1.bind(this);
    this.onChangeProp2 = this.onChangeProp2.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  };

  componentDidMount() {
    console.log('parent mounted', this);

  };

  onChangeProp1(e) {
    this.setState({
      prop1: e.target.value
    });
  };

  onChangeProp2(e) {
    this.setState({
      prop2: e.target.value
    });
  };

  onFormSubmit(e) {
  //onFormSubmit doesn't need binding because it does not modify the state
  //it just returns an object which could be used for other reasons (e.g. sent via axios)    
    e.preventDefault();
    console.log('submitting...');
    const data = {
      dataprop1: this.state.prop1,
      dataprop2: this.state.prop2
    };
    console.log(data);
  }

  render() {

    return (
      <div>

        <h3>
          hello App.js (parent)
        </h3>

        <p>prop1: {this.state.prop1}</p>
        <p>prop2: {this.state.prop2}</p>
        <br />
        <AppChild
          onFormSubmit={ this.onFormSubmit } /* props names are arbitrary, onFormSubmit could be DonaldDuck */
          onChangeProp1={this.onChangeProp1}
          onChangeProp2={this.onChangeProp2}
          prop1Value={this.state.prop1}
          prop2Value={this.state.prop2}
        />
      </div>
    )
  };
};

export default App;
