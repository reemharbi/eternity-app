import React, { Component } from 'react'
import Student from './Student';
import {Divider,
        Card} from 'semantic-ui-react';
export default class StudentsList extends Component {
    render() {
        const studentsList = this.props.students.map((student, index) => {
            return <Student  key={index} student={student} authToAccess={this.props.authToAccess} user={this.props.user} />;
            })
        return (
            <>
                <Divider horizontal>Students</Divider>
                <Card.Group centered='true'>
                {studentsList}
                </Card.Group>
            </>    
        )
    }
}
