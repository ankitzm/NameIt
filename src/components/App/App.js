import React from "react";
import "./App.css";
import Header from "./../Header/Header";
import SearchBox from "./../SearchBox/SearchBox";
import Result from "./../Result/Result";

const name = require("@rstacruz/startup-name-generator");

class App extends React.Component {
  state = {
    appName: "Name It !",

    headerExpanded: true,

    generatedNames: []
  };

  inputChange = inputText => {
    this.setState({
      headerExpanded: !inputText,
      generatedNames: inputText ? name(inputText) : []
    });
  };

  render() {
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          nameOfApp={this.state.appName}
        />{" "}
        <SearchBox onInputChange={this.inputChange} />
        <Result generatedNames={this.state.generatedNames} />
      </div>
    );
  }
}

export default App;
