import React, { Component } from 'react';
import { Row, Col } from 'antd';
import moment from 'moment';
import DailySchedule from './components/daily-schedule';
import './App.css';

const ClassItem = (props) => (
  <div>
    {props.classItem.ClassDescription.Name}
  </div>
)

const columns = [
  {
    title: 'ID',
    dataIndex: 'ID',
    key: 'ID',
    render: text => <span>{text}</span>,
  }, {
    title: 'Name',
    dataIndex: 'ClassDescription.Name',
    key: 'name',
    render: text => <span>{text}</span>,
  }, {
    title: 'Start',
    dataIndex: 'StartTime',
    key: 'start',
    render: text => <span>{moment(text).format('h:mma')}</span>,
  }, {
    title: 'End',
    dataIndex: 'EndTime',
    key: 'end',
    render: text => <span>{moment(text).format('h:mma')}</span>,
  }
];


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classes: [],
      users: []
    }
  }

  componentDidMount() {
    fetch('/classschedule')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        return res;
      })
      .then(classes => {
        return classes.sort((classItemA, classItemB) => {
          let comparison = 0;
          if (classItemA.StartTime > classItemB.StartTime) {
            comparison = 1;
          } else if (classItemA.StartTime < classItemB.StartTime) {
            comparison = -1;
          }
          return comparison;
        })
      })
      .then(classes => this.setState({ classes }));
  }

  render() {
    return (
      <div className="App">
        <Row>
        <h1>Class Schedule</h1>
        <Col span={6}>sadf</Col>
        <Col span={18}>

        {
          ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(day => {
            return (
                <DailySchedule
                  day={day}
                  columns={columns}
                  classes={this.state.classes.filter(classItem => {
                    return classItem['Day' + day];
                  })}
                ></DailySchedule>
            )
          })
        }
        </Col>
        </Row>
      </div>
    );
  }
}

export default App;
