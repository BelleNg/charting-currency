
import React from "react";
import Chart from "./Chart.jsx";
import Graph from "./Graph.jsx";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        This is App
        <Chart/>
        <Graph/>
      </div>
    )
  }
}
export default App;
