import React, { Component } from "react";
import styled from "styled-components";
import { Slider } from "primereact/slider";
import { Dropdown } from "primereact/dropdown";
import Graph from "./Graph";

const InputFormWrapper = styled.div`
  border: 2px solid red;
`;
const InputSlider = styled.input``;
const InputX = styled.div``;
const InputY = styled.div``;
const InputR = styled.div``;

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: null,
      y: 1,
      r: 2
    };
    this.onChangeSlider = this.onChangeSlider.bind(this);
    this.onChangeDropdown = this.onChangeDropdown.bind(this);
    this.onChangeRadius = this.onChangeRadius.bind(this);
    this.child = React.createRef();
  }

  onChangeDropdown(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.child.current.updateCoordinatesFromParent(this.state.x, this.state.y, this.state.r);
  }

  onChangeRadius(e) {
    this.setState({r: e.target.value})
    this.child.current.drawFigures(e.target.value.value);
    this.child.current.drawAxis();
    this.child.current.updateCoordinatesFromParent(this.state.x, this.state.y, this.state.r);
  }

  onChangeSlider(e) {
    var newValue;
    if (e.target && e.target.nodeName === "INPUT") {
      newValue = e.target.value;
    } else {
      newValue = e.value;
    }

    this.setState({ y: newValue });
    this.child.current.updateCoordinatesFromParent(this.state.x, this.state.y, this.state.r);
  }

  render() {
    const xCoordinates = [
      { x: "-2", value: -2 },
      { x: "-1.5", value: -1.5 },
      { x: "-1", value: -1 },
      { x: "-0.5", value: -0.5 },
      { x: "0", value: 0 },
      { x: "0.5", value: 0.5 },
      { x: "1", value: 1 },
      { x: "1.5", value: 1.5 },
      { x: "2", value: 2 }
    ];

    return (
      <InputFormWrapper>
      <Graph ref={this.child} props={this.state.r}/>
        <InputX>
          <Dropdown
            name="x"
            value={this.state.x}
            options={xCoordinates}
            onChange={this.onChangeDropdown}
            style={{ width: "150px" }}
            placeholder="Выберите x: "
            optionLabel="x"
          />
        </InputX>
        <InputY>
          Ввод Y:
          <InputSlider
            disabled
            value={this.state.y}
            type="number"
            onChange={this.onChangeSlider}
          />
          <Slider
            min={-3}
            max={5}
            value={this.state.y}
            onChange={this.onChangeSlider}
            style={{ width: "14em" }}
          />
        </InputY>
        <InputR>
          <Dropdown
            name="r"
            value={this.state.r}
            options={xCoordinates}
            onChange={this.onChangeRadius}
            style={{ width: "150px" }}
            placeholder="Выберите r: "
            optionLabel="x"
          />
        </InputR>
      </InputFormWrapper>
    );
  }
}
export default InputForm;
