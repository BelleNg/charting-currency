import React from "react";
import Axios from "axios";
import { Line } from "react-chartjs-2";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : this.props.dates || [
        { x: "2013-09-01", y: 128.2597 },
        { x: "2013-09-02", y: 127.3648 },
        { x: "2013-09-03", y: 127.5915 },
        { x: "2013-09-04", y: 120.5738 },
        { x: "2013-09-05", y: 120.5333 },
      ]
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.dates !== prevProps.dates) {
      this.setState( {data : this.props.dates})
    }

  }

  render() {
    return (
      <div>
        <Line
          data={{
            datasets: [
              {
                label: "price$",
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 2,
                fill: false,
                data: this.state.data
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: "Bitcoin Price Index",
              fontSize: 20,
            },
            scales: {
              xAxes: [
                {
                  type: "time",
                  distribution: "series",
                  time: {
                    unit: "day",
                  },
                },
              ],
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}

export default Graph;
