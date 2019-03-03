import React, { Component } from "react";
import styled from "styled-components";
import { Slider } from "primereact/slider";
import { Dropdown } from "primereact/dropdown";
import { Link } from "react-router-dom";

import * as ROUTES from "../../routes/routes";
import Cookies from "js-cookie";

const InputFormWrapper = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(6, 1fr [col-start]);
  grid-template-rows: repeat(5, 1fr [col-start]);
  grid-gap: 30px 10px;
`;
const InputSlider = styled.input``;
const InputX = styled.div`
  grid-column: 3 / span 2;
  justify-self: center;
`;
const InputY = styled.div`
  grid-column: 3 / span 2;
  justify-self: center;
  display: grid;
`;
const InputR = styled.div`
  grid-column: 3 / span 2;
  justify-self: center;
`;

const Button = styled.button`
  grid-column: 3 / span 2;
  justify-self: center;
  box-shadow: 0 2px 5px #00000029, 0 3px 6px #0000001a;
  z-index: 2;
  text-decoration: none;
  background: #5bcccc;
  border: 0;
  position: relative;
  cursor: pointer;
  outline: unset;
  font-size: 12pt;
  text-transform: uppercase;
  letter-spacing: 3px;
  min-width: 300px;
  min-height: 57px;

  ::before {
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: "";
    background-color: #3c8384;
    z-index: -1;
  }

  :hover::before {
    left: 0;
    right: 0;
    opacity: 1;
  }

  :active {
    position: relative;
    bottom: -6px;
  }
  a {
    color: unset;
  }
  @media all and (min-width: 1192px) {
    /* TODO: add something ? */
  }
  @media all and (min-width: 759px) and (max-width: 1192px) {
  }
  @media all and (max-width: 759px) {
    grid-column: 2 / span 4;
  }
`;

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeSlider = this.onChangeSlider.bind(this);
    this.onChangeDropdown = this.onChangeDropdown.bind(this);
    this.onChangeRadius = this.onChangeRadius.bind(this);
    this.onClickSendData = this.onClickSendData.bind(this);
    this.onClickClearList = this.onClickClearList.bind(this);
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

  onClickSendData(e) {
    if (this.props.inputForm.radius.value > 0) {
    this.props.checkFormPoint(
      this.props.inputForm.x.value,
      this.props.inputForm.y,
      this.props.inputForm.radius.value
    );
    }
    else
      alert("Invalid radius");
  }

  onClickClearList(e) {
    this.props.clearPointsList();
  }

  logout(e) {
    Cookies.remove("access_token");
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
        <Button onClick={this.onClickSendData}>check</Button>
        <Button onClick={this.onClickClearList}>clear</Button>
        <Button onClick={this.logout}>
            <Link to={ROUTES.SIGNIN}>log out</Link>
        </Button>
      </InputFormWrapper>
    );
  }
}
export default InputForm;
