import React, { Component } from 'react'
import { Button, Modal,} from 'semantic-ui-react'

class ModelAzzam extends Component {
  state = { open:true }


  close = () => this.setState({ open: false })

  render() {

    return (
      <>

        <Modal
          open={this.state.open}
          closeOnEscape={false}
          closeOnDimmerClick={false}
          onClose={this.close}
        >
          <Modal.Header icon='question'>Azzam is asking a question</Modal.Header>
          <Modal.Content>
            <p>Are you sure you want to search for Azzam?</p>
          </Modal.Content>
          <Modal.Actions>
<a href='https://www.google.com/search?q=azzam&safe=strict&source=lnms&sa=X&ved=0ahUKEwj26NjJl5XkAhUGzYUKHVxhBGUQ_AUIDCgA&biw=1920&bih=969&dpr=1'>
<Button
              positive
              labelPosition='right'
              icon='checkmark'
              content='Yes'
            />
</a>


          </Modal.Actions>
        </Modal>
      </>
    )
  }
}

export default ModelAzzam
