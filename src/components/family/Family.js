import React, { Component } from 'react';
import {
    Divider,
    Container
  } from 'semantic-ui-react';
import InstructorsList from './InstructorsList';
import StudentsList from "./studentsList";
import './Family.css'


export default class Family extends Component {
    render() {

        return (
            <Container textAlign='center' className="family">     
            <Divider horizontal>The Family</Divider>
            <InstructorsList instructors={this.props.instructors} usman={this.props.usman} authToAccess={this.props.authToAccess} user={this.props.user}/>
            <StudentsList students={this.props.students} authToAccess={this.props.authToAccess} user={this.props.user}/>
            </Container>
        )
    }
}
