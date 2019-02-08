import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

//TODO depends on where the server is
const ServerURL = "localhost:9999";

const GraphWrapper = styled.div`
  padding-top: 80px;
  text-align: center;
`;

class Graph extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.drawPoint = this.drawPoint.bind(this);
  }

  componentDidMount() {
    this.drawFigures();
    this.drawAxis();
    this.props.getAllPoints();
  }

  componentDidUpdate() {
    this.drawFigures();
    this.drawAxis();
    console.log("Graph обновился");
  }

  render() {
    return (
      <GraphWrapper>
        <canvas id="a" ref="canvas" width={500} height={500} onClick={this.onClick}/>
      </GraphWrapper>
    );
  }

  onClick(e) {
    this.props.addPoint(e.x, e.y);
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

  drawPoint(context, x, y, doesBelong) {
    context.beginPath();
    if (doesBelong) {
      context.fillStyle = "Blue";
    } else {
      context.fillStyle = "Red";
    }
    context.arc(x, this.refs.canvas.width - y, 3, 0, 2 * Math.PI);
    context.fill();
  }

}
export default Graph;

function doXYRequest(x, y) {
  //TODO: what is response and what happens at this.setState(response.data)
  axios
    .get(
      ServerURL +
        "/points/new_point_" +
        this.state.x +
        "_" +
        this.state.y +
        "_" +
        this.state.r
    )
    .then(response => onAjaxSuccess(response.data));
}

function doRRequest(radius) {
  // $.ajax({
  //         type: "post",
  //         url: "controllerServlet",
  //         data: {
  //             radius: radius,
  //             doSave: 0
  //         },
  //         success: (onAjaxSuccess)
  //     }
  // );
}

function onAjaxSuccess(data) {
  // var return_data = JSON.parse(data);
  // var context = canvas.getContext("2d");
  // var row = document.getElementById("results");
  // row.innerHTML = '<div class=\"row header__table\">' +
  //     '<div class=\"cell\">X</div>' +
  //     '<div class=\"cell\">Y</div>' +
  //     '<div class=\"cell\">R</div>' +
  //     '<div class=\"cell\">Result</div>' +
  //     '</div>';
  // context.clearRect(0, 0, canvas.width, canvas.height);
  // canvasFill();
  // if (return_data.length > 1) {
  //     for (var i = 0; i < return_data.length - 1; i++) {
  //         x = return_data[i].x * k + graphWidth / 2;
  //         y = return_data[i].y * k + graphWidth / 2;
  //         drawPoint(context, x, y, return_data[i].isInArea);
  //         var newRow = document.createElement("div");
  //         newRow.setAttribute("class", "row");
  //         newRow.innerHTML = '<div class =\"cell\" data-title=\"X\">' + return_data[i].x.toFixed(2) + '</div>' +
  //             '<div class =\"cell\" data-title=\"Y\">' + return_data[i].y.toFixed(2) + '</div>' +
  //             '<div class =\"cell\" data-title=\"R\">' + return_data[i].radius.toFixed(2) + '</div>' +
  //             '<div class =\"cell\" data-title=\"Result\">' + return_data[i].isInArea + '</div>' +
  //             '</div>';
  //         row.appendChild(newRow);
  //     }
  //     if (document.getElementById("clearBtn") === null) {
  //         content = document.getElementById("content");
  //         var clearBtn = document.createElement("div");
  //         clearBtn.setAttribute("id", "clearBtn");
  //         clearBtn.setAttribute("style", "display: flex; flex-direction: column");
  //         clearBtn.innerHTML = '<div id=\"ClearBtn\" style=\"display: flex; flex-direction: column;\"><button onclick=\"clearList()\" class=\"btn btn--font input__global--margin input__global--size\">clear list</button></div>';
  //         content.appendChild(clearBtn);
  //     }
  // } else {
  //         content = document.getElementById("content");
  //         clearBtn = document.getElementById("clearBtn");
  //         content.removeChild(clearBtn);
  // }D
  // var errorMsg = return_data[return_data.length - 1].errorMsg;
  // var error = document.getElementById("error_msg");
  // error.innerText = errorMsg;
}
