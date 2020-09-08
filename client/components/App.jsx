
import React from "react";
import DateView from "./DateView.jsx";




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        This is App
        <DateView/>
      </div>
    )
  }
}
export default App;
