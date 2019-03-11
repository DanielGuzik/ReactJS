import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import NoMatch from './components/NoMatch/NoMatch';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const Home = () => {
  return (
    <>
      <header className="App-header">
        <Header />
      </header>

      <main className="App-main">
        <Main />
      </main>

      <footer className="App-footer">
        <Footer />
      </footer>
    </>
  );
};
const noMatch = () => {
  return (
    <NoMatch />
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route component={noMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;