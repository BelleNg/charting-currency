import React from "react";
import Axios from 'axios'
import { Line } from "react-chartjs-2";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Rainfall",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          fill: false,
          data: [128.2597, 127.3648, 127.5915, 120.5738, 120.5333],
        },
      ],
    };
    this.setData = this.setData.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
      this.getData();
  }
  
  setData(dataObj) {
      const labelsArr = Object.keys(dataObj);
      const dataArr = Object.values(dataObj);
      this.setState({ labels: labelsArr});
  }


  getData() {
    Axios.get('http://localhost:3000/api/coindesk')
    .then(function (response) {
      console.log(response);
      this.setData(response.data.bpi)
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return (
      <div>
        <Line
          data={this.state}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
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
