import React, { Component } from "react";
import "./pointsTable.css";
export default class PointsTable extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(){
    console.log("обновился")
  }
  
  render() {
    const { points } = this.props;
    return (
      <div>
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
              <div className="cell">{item.inArea}</div>
            </div>
          ))}
      
        </div>
      </div>
    );
  }
}
