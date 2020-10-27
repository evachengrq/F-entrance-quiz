import React, { Component } from 'react';
import './StudentList.css';

class StudentList extends Component {
  state = ["成吉思汗", "鲁班七号", "太乙真人", "钟无艳", "花木兰", "雅典娜", "芈月", "白起", "刘禅", "庄周", "马超", "刘备", "哪吒", "大乔", "蔡文姬"]

  render() {
    return (
      <section className="studentList">
          <h1>学员列表</h1>
          <section>
            {this.state.map((item, index) => (
              <button className="studentLabels">{index + 1 + ". " + item}</button>
            ))}
            <button className="addStudent">+ 添加学员</button>
          </section>
      </section>
    );
  }
}

export default StudentList;