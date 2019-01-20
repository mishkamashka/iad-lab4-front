import React, { Component } from "react";
import "./pointsTable.css";
export default class PointsTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="results" class="wrap__table table ">
          <div class="row header__table">
            <div class="cell">X</div>
            <div class="cell">Y</div>
            <div class="cell">R</div>
            <div class="cell">Result</div>
          </div>
          {/* example row */}
          <div class="row">
            <div class="cell">X</div>
            <div class="cell">Y</div>
            <div class="cell">R</div>
            <div class="cell">Result</div>
          </div>
        </div>
      </div>
    );
  }
}
