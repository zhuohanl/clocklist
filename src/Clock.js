import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.timerId);
  // }

  render() {
    const { city, timeZone } = this.props;
    console.log("this.props", this.props);
    const self = this;
    return (
      <div style={{ margin: 30, fontSize: 28 }}>
        <i className="fa fa-clock-o" />
        <span style={{ paddingLeft: 10 }}>
          {timeZone}: {this.state.date.toLocaleString("en-Au", { timeZone })}
        </span>
      </div>
    );
  }
}

Clock.defaultProps = {
  city: "Brisbane",
  timeZone: "Australia/Brisbane"
};
