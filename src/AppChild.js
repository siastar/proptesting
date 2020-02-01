import React from 'react';

class AppChild extends React.Component {

    constructor(props){
        super();
        this.state ={
            testmessage: 'this is a test message',
          };
    };

        componentDidMount(){
        console.log('child mounted' , this);
        };


    
    render() {
        
    return (
        <div>
          <hr/>
          <h3> hello AppChild.js (child)</h3>          
          <p>..............................................</p>
          <p> information provided in child's form will be </p>
          <p>send back to parent and will update its state </p>
          <p>..............................................</p>
          {/* jsx valid tags and attributes */}
          {/* https://react-cn.github.io/react/docs/tags-and-attributes.html */}
          {/* jsx valid supported events */}
          {/* https://react-cn.github.io/react/docs/tags-and-attributes.html */}


          <form onSubmit = {this.props.onFormSubmit}>
          <br/>
          <div>
            <label>new prop 1: </label>
            <input type="text"
                   name="prop1"
                   value={ this.props.prop1 }
                   onChange={this.props.onChangeProp1}
            />
          </div>
          <br/>
          <div>
            <label>new prop 2: </label>
            <input  type="text"
                    name="prop2"
                    value={ this.props.prop2 }
                    onChange={this.props.onChangeProp2}
            />
          </div>
          <br/>
          <div>
            <input type="submit"
                   value="submit"
                   
            />
          </div>
        </form>
      </div>
    )
  }
};
export default AppChild;
