import React from "react";
import Axios from "axios";
import Graph from "./Graph.jsx";

class DateView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: "",
      datesData: null,
    };
    this.startDateHandleChange = this.startDateHandleChange.bind(this);
    this.endDateHandleChange = this.endDateHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getDates = this.getDates.bind(this);
    this.formatDates = this.formatDates.bind(this);
  }

  startDateHandleChange(event) {
    this.setState({ startDate: event.target.value });
  }

  endDateHandleChange(event) {
    this.setState({ endDate: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.getDates();
  }

  formatDates(dataObj) {
    let dateArr = [];
    for (let key in dataObj) {
      let obj = {};
      obj['x'] = key
      obj['y'] = dataObj[key];
      dateArr.push(obj);
    }
    return dateArr;
  }

  getDates() {
    Axios.get(`http://localhost:3000/api/coindesk/?start=${this.state.startDate}&end=${this.state.endDate}`)
      .then((response) => {
        let formattedDates = this.formatDates(response.data.bpi);
        return formattedDates;
      })
      .then((formattedDates) => {
        this.setState({ datesData: formattedDates});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <legend>Enter dates in YYYY-MM-DD format:</legend>
          <label htmlFor="startDate">Start Date:</label>
          <br></br>
          <input
            type="text"
            id="startDate"
            name="startDate"
            value={this.state.startDate}
            onChange={this.startDateHandleChange}
          ></input>
          <br></br>
          <label htmlFor="endDate">End Date:</label>
          <br></br>
          <input
            type="text"
            id="endDate"
            name="endDate"
            value={this.state.endDate}
            onChange={this.endDateHandleChange}
          ></input>
          <br></br>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
        <div>
        <Graph dates={this.state.datesData}/>
        </div>
      </div>
    );
  }
}
export default DateView;
