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
//      this.onFormSubmit = this.onFormSubmit.bind(this);
    };

    componentDidMount(){
        console.log('parent mounted' , this);

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
 
    render(){
        
        return(
            <div>
              
                <h3>
                   hello App.js (parent)
                </h3>
              
                <p>prop1: {this.state.prop1}</p>
                <p>prop2: {this.state.prop2}</p>
              <br/>
              <AppChild
                onChangeProp1 = {this.onChangeProp1}
                onChangeProp2 = {this.onChangeProp2}
                prop1Value = {this.state.prop1}
                prop2Value = {this.state.prop2}
                onFormSubmit = {this.onFormSubmit}
              />
            </div>
            
        )
    };
};

export default App;
