import React, {Component} from 'react';
import '../test/test.css';
import {connect} from 'react-redux';

class Bottom extends Component {
  componentDidMount(){
    this.setState({
      mount: "hey"
    })
  }

  mounted_state(state){
    state = "I have been updated"
    console.log('Howdy')
  }

  render(){
    return(
      <div className="test_holder">
        <div className="test_main">
          State: {this.props.num}
        </div>
        <div className="test_main">
          <input type="text" value={this.props.name} onChange={this.props.change_name.bind(this)}/>
        </div>
        <div className="test_main">
          My name is: {this.props.name}
        </div>
        <div>
          Mounted state + {this.props.mount} + is state mounted
        </div>
      </div>
    )
  }
}

const mapStatetoProps = (state) =>{
  return {
    name: state.name,
    num: state.num,
    mount: state.mount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    change_name: (e) => {
      const action = { type: "NAME", text: e.target.value}
      dispatch(action)
    },
    mounted_state: () => {
      const action = {type: "MOUNT", text: "I have been updated"}
      dispatch(action)
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Bottom);
