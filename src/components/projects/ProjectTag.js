import React, { Component } from 'react'
import { Label } from 'semantic-ui-react'

export default class ProjectTag extends Component {
  render() {
    let color = "";

    switch (this.props.tag) {
      case "HTML":
        color = "red";
        break;
      case "CSS":
        color = "yellow";
        break;
      case "JavaScript":
        color = "blue";
        break;
      case "Ruby":
        color = "green";
        break;
      case "Ruby on Rails":
        color = "orange";
        break;
      case "React":
        color = "violet";
        break;
      case "Firebase":
        color = "brown";
        break;
      case "Bootstrap":
        color = "purple"
        break;
      case "Postgresql":
        color = "olive"
        break;
      case "Express":
        color = "red"
        break;
      case "MongoDB":
        color = "teal"
        break;
      case "Mongoose":
        color = "green"
        break;
      case "React Native":
        color = "blue"
        break;
      case "Socket.IO":
        color = "blue"
        break;
      default:
        color = ""
    }
    return (
      <Label color={color}>{this.props.tag} </Label>
    )
  }
}
