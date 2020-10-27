import React, { Component } from 'react';
import StudentList from '../components/studentList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <StudentList />
      </div>
    );
  }
}

export default App;
