import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const GraphWrapper = styled.div`
  padding-top: 80px;
  text-align: center;
`;

class Graph extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.drawFigures();
    this.drawAxis();
    this.props.getAllPoints();
    this.drawPoints();
  }

  componentDidUpdate() {
    this.drawFigures();
    this.drawAxis();
    // this.drawPoints();
    console.log("Graph обновился");
  }

  render() {
    return (
      <GraphWrapper>
        <canvas id="a" ref="canvas" width={500} height={500} fill="white" onClick={this.onClick}/>
      </GraphWrapper>
    );
  }

  onClick(e) {

    var x = e.clientX;
    var y = e.clientY;

    const context = this.refs.canvas.getContext("2d");
    const graphWidth = this.refs.canvas.width;
    const graphHeight = this.refs.canvas.height;
    
    const k = 40;
    context.beginPath();
          // context.arc(x - this.refs.canvas.offsetLeft, y - this.refs.canvas.offsetTop, 3, 0, 2 * Math.PI); //draws point under click
    context.arc(x - this.refs.canvas.offsetLeft, y - this.refs.canvas.offsetTop, 3, 0, 2 * Math.PI);
    // context.arc(x, y, 3, 0, 2 * Math.PI);
    context.fill();

    var graph_x = ((x - this.refs.canvas.offsetLeft) - graphWidth / 2) / k;
    var graph_y = (graphHeight / 2 - (y - this.refs.canvas.offsetTop)) / k;
    console.log("x = ", graph_x, "y = ", graph_y);
    console.log(y - this.refs.canvas.offsetTop);

    this.props.addPoint(graph_x, graph_y);
    // this.drawPoints();
  }

  drawPoints() {
    const context = this.refs.canvas.getContext("2d");
    const graphWidth = this.refs.canvas.width;
    const graphHeight = this.refs.canvas.height;
    const k = 40;
    const { points } = this.props;
    var i;

    for (i = 0; i < points.length; i++) {
      context.beginPath();
      if (points[i].doesBelong) {
        context.fillStyle = "Blue";
      } else {
        context.fillStyle = "Red";
      }
      context.arc(points[i].x * k + graphWidth / 2, points[i].y * k - graphHeight / 2, 3, 0, 2 * Math.PI);
      context.fill();
    }
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
    if (Number(this.props.radius.value) > 0) {
      context.beginPath();
      //   TODO: check var statement
      var pixelsForRadius = Number(this.props.radius.value) * k;

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
    var radius = this.props.radius.value;
    const context = this.refs.canvas.getContext("2d");
    context.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);

    if (radius > 0) {
      const graphWidth = this.refs.canvas.width;
      var pixelsForRadius = Number(radius) * 40;

      context.beginPath();
      context.fillStyle = "#5c99ED";
      context.strokeStyle = "#5c99ED";
      // треугольник
      context.moveTo(graphWidth / 2, graphWidth / 2 - 1 + pixelsForRadius / 2);
      context.lineTo(graphWidth / 2 - 1 - pixelsForRadius / 2, graphWidth / 2);
      context.lineTo(graphWidth / 2 - 1, graphWidth / 2 - 1);
      context.fill();
      // прямоугольник
      context.fillRect(
        graphWidth / 2 + 1,
        graphWidth / 2 + 1 - pixelsForRadius,
        pixelsForRadius / 2 - 1,
        pixelsForRadius - 1
      );
      // окружность
      context.closePath();
      context.beginPath();
      context.moveTo(graphWidth / 2, graphWidth / 2);
      context.arc(
        graphWidth / 2 - 1,
        graphWidth / 2 - 1,
        pixelsForRadius - 1,
        1 * Math.PI,
        1.5 * Math.PI
      );

      context.fill();
      context.closePath();
    } else {
      context.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
      // alert("Радиус должен быть больше 0");
    }
  }

  // setPoint(e) {
  //   var canvas1 = document.getElementById("a");
  //   var rect = canvas1.getBoundingClientRect();
  //   var offset = (rect.width - canvas1.width) / 2 + 1;
  //   var x = e.clientX - rect.left - offset;
  //   var y = e.clientY - rect.top - offset;
  //   var real_x = (x - canvas1.width / 2) / 40;
  //   var real_y = -(y - canvas1.width / 2) / 40;
  //   alert("aefea");

  //   // TODO: remove this from here
  //   this.drawPoint(this.refs.canvas.getContext("2d"), x, y, true);
  //   // this.setState(real_x, real_y, this.state.r, 0);
  //   doXYRequest(x, y);
  //   // todo: add doXYRequest here
  // }

}
export default Graph;
