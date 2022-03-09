import React from "react";
import FormComponent from "./components/FormComponent";

class App extends React.Component{
  render(){
    return(
      <div>
          <h2>React Redux Application</h2>
          <FormComponent />
      </div>
    )
  }
}

export default App;