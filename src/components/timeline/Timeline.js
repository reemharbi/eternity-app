import React, { Component } from 'react';
import TimelineItem from './TimelineItem';
import { Container, Image, Divider, Button, Modal } from 'semantic-ui-react';
import logo from '../../images/Triskelion_A.png';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
import TimelineForm from './TimelineForm.js';

export default class Timeline extends Component {
 state = {
  modalIsOpen: false
 };
 open = () => this.setState({ modalIsOpen: true });

 close = () => this.setState({ modalIsOpen: false });

 showAddMemory = () => {
  if (this.props.user && this.props.students) {
   const user = this.props.students.some((student) => {
    return student.git === this.props.user.login;
   }) || this.props.instructors.some((instructor) => {
    return instructor.git_i === this.props.user.login;
   });
   if (user) {
    return (
     <Modal
      open={this.state.modalIsOpen}
      onClose={this.close}
      trigger={
       <Button color="teal" centered onClick={this.open}>
        Add a New Memory
							</Button>
      }
     >
      <Modal.Header textAlign="center">New Memory</Modal.Header>
      <Modal.Content>
       <TimelineForm
        handleChange={this.props.handleChange}
        title={this.props.title}
        content={this.props.content}
        location_name={this.props.location_name}
        week={this.props.week}
        handleChangeSelect={this.props.handleChangeSelect}
        handleSubmit={this.props.handleSubmit}
        close={this.close}
       />
      </Modal.Content>
     </Modal>
    );
   } else {
    return null;
   }
  }
 };

 render() {

  const allTimeline = this.props.timeline.map((timeline, key) => {
   return (
    <VerticalTimelineElement
     className="vertical-timeline-element--work"
     date={timeline.week}
     iconStyle={{ background: '#999999', color: '#000' }}
     icon={<Image size="mini" src={logo} centered="true" className="icon" />}
    >
     <TimelineItem
      key={key}
      timeline={timeline}
      user={this.props.user}
      removeMemory={this.props.removeMemory}
      students={this.props.students}
     />
    </VerticalTimelineElement>
   );
  });

  return (
   <Container className="timeline">
    <div className="memories">
     <Divider horizontal>Memories Timeline</Divider>
     <Container textAlign="center">{this.showAddMemory()}</Container>

     <div className="test">
      <Divider />
      <VerticalTimeline>{allTimeline}</VerticalTimeline>
     </div>
    </div>
   </Container>
  );
 }
}
