import React, { Component } from 'react';
import './GroupList.css';

class GroupList extends Component {
//   state = [
//       groups: {groupName: "一组"
//       "成吉思汗", "鲁班七号", "太乙真人", "钟无艳", "花木兰", "雅典娜", "芈月", "白起", "刘禅", "庄周", "马超", "刘备", "哪吒", "大乔", "蔡文姬"]

  render() {
    return (
      // TODO GTB-知识点: - 存在没有意义的html嵌套
      // TODO GTB-知识点: * class命名不符合规范，不建议用驼峰
      <section>
        <section className="groupHeader">
          <h1>分组列表</h1>
          <button className="groupStudents">分组学员</button>
        </section>
      </section>
    );
  }
}

export default GroupList;