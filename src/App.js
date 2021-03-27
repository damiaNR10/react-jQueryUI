import ReactDOM from "react-dom";
import './App.css';
import React from 'react';
import moment from 'moment';

class App extends React.Component {
  state = {
    selectedDate: "09/22/2020"
  };
  render() {
    return (
      <div className="App">
        <h1>Hello Moment.js</h1>
        <h2>
          {this.state.selectedDate
            ? this.state.selectedDate
            : "Please select date"}
        </h2>
        <DatePicker
          initialDate={this.state.selectedDate}
          onDateChange={date => this.setState({ selectedDate: date })}
        />
        {this.state.selectedDate ? (
          <DateDetails date={this.state.selectedDate} format="MM/DD/YYYY" />
        ) : null}
      </div>
    );
  }
}

function DateDetails({ date, format }) {

  const theDate = moment(date, format).locale("pl");
  const now = moment().hour(0).minute(0).seconds(0);
  const nextValentines = moment([theDate.year(), "1", "14"]);
  const summerStart = theDate.clone().startOf("year").add(5, "months").add(20, "days");
  const summerEnd = moment(summerStart).month(8).date(23);
  const programmersDay = moment(theDate).startOf("year").dayOfYear(256);

  if(theDate.isSameOrAfter(nextValentines)) {
    nextValentines.add(1, "year");
  }

  return (
    <div className="DateDetails">
      <h2>Fun facts about this date</h2>
      <ol>
        <li>The date is: {theDate.format("llll")}</li>
        <li>
          Counting from now ({now.format("LLLL")}), it would be {theDate.from(now)}.
        </li>
        <li>
          Next valentine's day ({nextValentines.format("ll")}) will be {theDate.to(nextValentines)}
        </li>
        <li>It {theDate.isLeapYear() ? "falls" : "does not fall"} within a leap year.</li>
        <li>
          It {theDate.isBetween(summerStart.clone().subtract(1, "days"), summerEnd.clone().add(1, "days")) ? "is" : "is not"} a summer day (it's between {summerStart.format("ll")} and {summerEnd.format("ll")}).
        </li>
        <li>It { theDate.isSame(programmersDay, "day") ? "is" : "is not"} the Programmer's Day ({programmersDay.format("ll")}).</li>
      </ol>
    </div>
  );
}
class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.datepickerContainer = React.createRef();
  }
  componentDidMount() {
    window.$(this.datepickerContainer.current).datepicker({
      onSelect: this.props.onDateChange,
      defaultDate: this.props.initialDate
    });
  }

  render() {
    return <div ref={this.datepickerContainer} />;
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;