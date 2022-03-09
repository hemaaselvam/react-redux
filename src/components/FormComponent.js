import React from "react";
import {connect} from 'react-redux';
import { addText, reset } from "../actions";

class FormComponent extends React.Component{
  constructor(props){
    super(props);
    this.inputBox=React.createRef();
  }
  handleSubmitButton = () => {
    this.props.addText(this.inputBox.current.value);
    this.inputBox.current.value="";
    }
  
  handleResetButton = () => {
    this.props.reset("");
    this.inputBox.current.value="";
  }

  render(){
    const {text} = this.props.formState;
    // console.trace(text);
    return(
      <div>
          <input type="text" ref={this.inputBox}/> 
          <br></br>
          <div style={{"paddingTop":"10px"}}>
            <button onClick={()=>this.handleSubmitButton()}>Add</button>&nbsp;
            <button onClick={()=>this.handleResetButton()}>Reset</button>
          </div>
          <div>
            <h3>Entered text:</h3>
            {text}
          </div>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return{
    formState: state,
  }
};

const mapDispatchToProps =(dispatch)=>{
  return{
    addText: (payload)=> dispatch(addText(payload)),
    reset: (payload)=> dispatch(reset(payload)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)