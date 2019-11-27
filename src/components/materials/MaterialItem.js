import React, { Component } from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'


export default class MaterialItem extends Component {
  render() {

    return (
      <Card>
        {<Modal trigger={<Image src={this.props.material.img_url} wrapped ui={false} />}>
          <Modal.Header>{this.props.material.title}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={this.props.material.img_url} />
            <Modal.Description>
              <p>{this.props.material.content}</p>
              <Header><h3><a target="_blank" rel="noopener noreferrer" href={this.props.material.pdf_url}>Click here to view some resource</a></h3></Header>
            </Modal.Description>
          </Modal.Content>
        </Modal>}
      </Card>
    )
  }
}