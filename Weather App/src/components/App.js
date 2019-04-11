import React, { Component } from 'react';
import Form from './Form'
import Result from './Result'
import './App.css';

// ENTER YOUR APIKEY FROM OPENWEATHERMAP.ORG
const APIKey = '';

class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false,
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleCitySubmit = event => {
    event.preventDefault()
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("Not found this city in databases")
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString()
        this.setState(state => ({
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          err: false,
          city: state.value,
        }))
      })
      .catch(err => {
        console.log(err);
        this.setState(prevState => ({
          err: true,
          city: prevState.value,
        }))
      })
  }

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }

  // UPDATE IN REAL TIME 

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.value !== this.state.prevState) {
  //     const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

  //     if (this.state.value.length < 2) return

  //     if (this.state.value.length >= 3) {
  //       fetch(API)
  //         .then(response => {
  //           if (response.ok) {
  //             return response
  //           }
  //           throw Error("Not found")
  //         })
  //         .then(response => response.json())
  //         .then(data => {
  //           console.log(data)
  //           const time = new Date().toLocaleString()
  //           this.setState(state => ({
  //             date: time,
  //             sunrise: data.sys.sunrise,
  //             sunset: data.sys.sunset,
  //             temp: data.main.temp,
  //             pressure: data.main.pressure,
  //             wind: data.wind.speed,
  //             err: false,
  //             city: state.value,
  //           }))
  //         })
  //         .catch(err => {
  //           console.log(err);
  //           this.setState(prevState => ({
  //             err: true,
  //             city: prevState.value,
  //           }))
  //         })
  //     }
  //   }
  // }
}

export default App;
