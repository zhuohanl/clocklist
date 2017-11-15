import React, { Component } from "react";

import Clock from "./Clock";

const cities = [
  { city: "Adelaide", timeZone: "Australia/Adelaide" },
  { city: "Brisbane", timeZone: "Australia/Brisbane" },
  { city: "Sydney", timeZone: "Australia/Sydney" },
  { city: "Shanghai", timeZone: "Asia/Shanghai" },
  { city: "New York", timeZone: "America/New_York" }
];

export default class ClockList extends Component {
  render() {
    // const clocks = [];
    // for (let i = 0; i < cities.length; i++) {
    //   const { city, timeZone } = cities[i];
    //   clocks.push(<Clock city={city} timeZone={timeZone} />);
    // }

    return <ul>{cities.map(item => <Clock item {...item} />)}</ul>;
  }
}
