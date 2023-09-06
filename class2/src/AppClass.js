// every component must start with capital letter
import React from "react";
import { PlaceClass } from "./components/PlaceClass";

// we must export the component so we can use it anywhere
export class AppClass extends React.Component {
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <PlaceClass />
      </div>
    );
  }
}
