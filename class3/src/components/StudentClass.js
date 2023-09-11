import React from "react";

export class StudentClass extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Student name: {this.props.student.name}</h2>
        <h2>Student lastName: {this.props.student.lastName}</h2>
        <h2>Student index: {this.props.student.index}</h2>
      </div>
    );
  }
}
