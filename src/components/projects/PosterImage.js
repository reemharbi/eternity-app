import React, { Component } from 'react'

export default class PosterImage extends Component {
    render() {
        return (
            <img src={this.props.img} alt="" height="250" srcset=""/>
        )
    }
}
