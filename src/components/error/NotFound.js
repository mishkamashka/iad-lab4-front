import React from 'react'
import image from "../../static/img/eg.jpg"

export default class NotFoundPage extends React.Component {
    render() {
      return (
        <div>
        <h1>
          404
        </h1>
        <img src={image}/>
        </div>
      )
    }
}