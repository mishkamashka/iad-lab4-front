import React, { Component } from "react";
import styled from "styled-components";
import { Slider } from "primereact/slider";
import { Dropdown } from "primereact/dropdown";

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
    this.onChangeSlider = this.onChangeSlider.bind(this);
    this.onChangeDropdown = this.onChangeDropdown.bind(this);
    this.onChangeRadius = this.onChangeRadius.bind(this);
  }

  onChangeDropdown(e) {
    this.props.setX(e.target.value);
  }

  onChangeRadius(e) {
    this.props.setRadius(e.target.value);
  }

  onChangeSlider(e) {
    this.props.setY(e.value);
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
        <InputX>
          <Dropdown
            name="x"
            value={this.props.inputForm.x}
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
            value={this.props.inputForm.y}
            type="number"
            onChange={this.onChangeSlider}
          />
          <Slider
            min={-3}
            max={5}
            value={this.props.inputForm.y}
            onChange={this.onChangeSlider}
            style={{ width: "14em" }}
          />
        </InputY>
        <InputR>
          <Dropdown
            name="r"
            value={this.props.inputForm.radius}
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
