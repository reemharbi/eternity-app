import React, { Component } from 'react'
import MaterialItem from './MaterialItem'
import { Divider, Card, Container } from 'semantic-ui-react';

export default class Materials extends Component {
    render() {

        const materialsList = this.props.materials.map((material, index) => {
            return <MaterialItem  key={index} material={material}/>;
        })

        return (
            <Container textAlign='center'>    
                <Divider horizontal>Materials</Divider>
                <Card.Group centered='true'>{materialsList}</Card.Group>
            </Container>
        )
    }
}