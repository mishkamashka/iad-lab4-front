import React, { Component } from "react";
import "./pointsTable.css";
export default class PointsTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="results" className="wrap__table table ">
          <div className="row header__table">
            <div className="cell">X</div>
            <div className="cell">Y</div>
            <div className="cell">R</div>
            <div className="cell">Result</div>
          </div>
          {/* example row */}
          <div className="row">
            <div className="cell">X</div>
            <div className="cell">Y</div>
            <div className="cell">R</div>
            <div className="cell">Result</div>
          </div>
        </div>
      </div>
    );
  }
}
