import React, { Component } from "react";
import "./pointsTable.css";
import styled from "styled-components";

const PointsTableWrapper = styled.div`
  padding-bottom: 30px;
`;

export default class PointsTable extends Component {
  render() {
    const { points } = this.props;
    return (
      <PointsTableWrapper>
        <div id="results" className="wrap__table table ">
          <div className="row header__table">
            <div className="cell">X</div>
            <div className="cell">Y</div>
            <div className="cell">R</div>
            <div className="cell">Result</div>
          </div>

          {points.map(item => (
            <div className="row" key={item.id}>
              <div className="cell">{item.x}</div>
              <div className="cell">{item.y}</div>
              <div className="cell">{item.r}</div>
              <div className="cell">
                {item.inArea === true ? "true" : "false"}
              </div>
            </div>
          ))}
        </div>
      </PointsTableWrapper>
    );
  }
}
