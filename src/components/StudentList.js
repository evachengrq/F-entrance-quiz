import React, { Component } from 'react';
import './StudentList.css';

class StudentList extends Component {
  render() {
    return (
      <section className="studentList">
          <h1>学员列表</h1>
          <button>+ 添加学员</button>
      </section>
    );
  }
}

export default StudentList;