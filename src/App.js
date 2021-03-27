import ReactDOM from "react-dom";
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    selectedDate: "09/22/2019"
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

  const theDate = new Date(date);
  const now = new Date();

  return (
    <div className="DateDetails">
      <h2>Fun facts about this date</h2>
      <ol>
        <li>The date is: {theDate.toString()}</li>
        <li>
          Counting from now ({now.toDateString()}), it would be {"6 years ago"}.
        </li>
        <li>
          Next valentine's day ({"XXXX"}) will be {"in 3 weeks"}
        </li>
        <li>It does not fall within a leap year.</li>
        <li>
          It is a summer day (it's between {"XXXX"} and {"YYYY"}).
        </li>
        <li>It is not the Programmer's Day ({"XXXX"}).</li>
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