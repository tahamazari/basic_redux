import React, {Component} from 'react';
import './test.css';
import {connect} from 'react-redux';

class Test extends Component {

  render(){
    return(
      <div className="test_holder">
        <div className="test_main">
          <div>{this.props.num}</div>
          <div className="btns_holder">
            <div className="btns_main">
              <button onClick={this.props.decrement.bind(this)}>Decrement</button>
              <button onClick={this.props.increment.bind(this)}>Increment</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = (state) =>{
  return {
    num: state.num
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: "INC"}),
    decrement: () => dispatch({type: "DEC"})
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Test);
