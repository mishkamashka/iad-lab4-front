import React, { Component } from "react";
import styled from "styled-components";

const GraphWrapper = styled.div``;

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      R: 3,
      x: 3,
      y: 3
    };
  }
  componentDidMount() {
    this.drawFigures();
    this.drawAxis();
  }

  drawAxis() {
    const context = this.refs.canvas.getContext("2d");
    const graphWidth = this.refs.canvas.width;
    const k = 40;

    context.beginPath();
    //Draw axis
    context.moveTo(0, graphWidth / 2);
    context.lineTo(graphWidth, graphWidth / 2);
    context.moveTo(graphWidth / 2, 0);
    context.lineTo(graphWidth / 2, graphWidth);
    context.closePath();
    context.strokeStyle = "black";
    context.stroke();

    //Draw arrows
    context.beginPath();
    context.moveTo(graphWidth - 10, graphWidth / 2 - 10);
    context.lineTo(graphWidth, graphWidth / 2);
    context.lineTo(graphWidth - 10, graphWidth / 2 + 10);

    context.moveTo(graphWidth / 2 - 10, 10);
    context.lineTo(graphWidth / 2, 0);
    context.lineTo(graphWidth / 2 + 10, 10);

    //Do the stroke
    context.strokeStyle = "black";
    context.stroke();

    //Label axis
    context.font = "22px Courier";
    context.textBaseline = "top";
    context.textAlign = "left";
    context.fillStyle = "black";
    context.fillText("Y", graphWidth / 2 + 10, 0);
    context.fillText("X", graphWidth - 20, graphWidth / 2 + 10);

    //Draw measures if radius is set
    if (Number(this.state.R) > 0) {
      context.beginPath();
      //   TODO: check var statement
      var pixelsForRadius = Number(this.state.R) * k;

      //Draw measures
      for (var l = 40; l < graphWidth / 2 - 20; l = l + 40) {
        context.moveTo(graphWidth / 2 - l, graphWidth / 2 - 5);
        context.lineTo(graphWidth / 2 - l, graphWidth / 2 + 5);
        context.moveTo(graphWidth / 2 - (l - 20), graphWidth / 2 - 2);
        context.lineTo(graphWidth / 2 - (l - 20), graphWidth / 2 + 2);
        context.moveTo(graphWidth / 2 + l, graphWidth / 2 - 5);
        context.lineTo(graphWidth / 2 + l, graphWidth / 2 + 5);
        context.moveTo(graphWidth / 2 + (l - 20), graphWidth / 2 - 2);
        context.lineTo(graphWidth / 2 + (l - 20), graphWidth / 2 + 2);

        context.moveTo(graphWidth / 2 - 5, graphWidth / 2 - l);
        context.lineTo(graphWidth / 2 + 5, graphWidth / 2 - l);
        context.moveTo(graphWidth / 2 - 2, graphWidth / 2 - (l - 20));
        context.lineTo(graphWidth / 2 + 2, graphWidth / 2 - (l - 20));
        context.moveTo(graphWidth / 2 - 5, graphWidth / 2 + l);
        context.lineTo(graphWidth / 2 + 5, graphWidth / 2 + l);
        context.moveTo(graphWidth / 2 - 2, graphWidth / 2 + (l - 20));
        context.lineTo(graphWidth / 2 + 2, graphWidth / 2 + (l - 20));
      }
      context.strokeStyle = "black";
      context.stroke();
    }
  }

  drawFigures() {
    const context = this.refs.canvas.getContext("2d");
    const graphWidth = this.refs.canvas.width;
    var pixelsForRadius = Number(this.state.R) * 40;

    context.beginPath();
    context.fillStyle = "#5c99ED";
    context.strokeStyle = "#5c99ED";
    //Bottom-Left
    context.moveTo(graphWidth / 2, graphWidth / 2 - 1 - pixelsForRadius / 2);
    context.lineTo(graphWidth / 2 - 1 + pixelsForRadius / 2, graphWidth / 2);
    context.lineTo(graphWidth / 2 - 1, graphWidth / 2 - 1);
    context.fill();
    //Top-Left
    context.fillRect(
      graphWidth / 2 + 1 - pixelsForRadius,
      graphWidth / 2 + 1 - pixelsForRadius,
      pixelsForRadius - 1,
      pixelsForRadius - 1
    );
    //Bottom-Right
    context.closePath();
    context.beginPath();
    context.arc(
      graphWidth / 2 - 1,
      graphWidth / 2 + 1,
      pixelsForRadius - 1,
      0.5 * Math.PI,
      1.5 * Math.PI
    );
    context.closePath();
    context.fill();
  }

  updateCanvas() {}

  render() {
    return (
      <GraphWrapper>
        <canvas ref="canvas" width={500} height={500} />
      </GraphWrapper>
    );
  }
}
export default Graph;
