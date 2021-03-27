import logo from './logo.svg';
import './App.css';
import React from 'react';

class DatePicker extends React.Component {

  constructor(props) {
    super(props);
    this.datePickerContainer = React.createRef();
  }

  componentDidMount() {
    window.$(this.datePickerContainer.current).datepicker({
      onSelect: this.props.onDateChanged,
    });
  }

  componentWillUnmount() {
    window.$(this.datePickerContainer.current).datepicker("destroy");
  }

  render() {
    return (
      <div ref = {this.datePickerContainer}/>
    )
  }
}

class App extends React.Component {

  state = {
    selectedDate: null,
  }

  render() {
    return (
      <div className="App">
        <h1>Hello jQueryUI!</h1>
        <h2>{this.state.selectedDate ? this.state.selectedDate : "Please select date"}</h2>
        <DatePicker onDateChanged={date => {this.setState({selectedDate: date})}}/>
      </div>
    );
  }
}

export default App;
