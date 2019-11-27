import React, { Component } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { Image, Button } from 'semantic-ui-react';
export default class TimelineItem extends Component {
	showRemoveButton() {
		if (this.props.user && this.props.timeline && this.props.students) {
			const user = this.props.students.find( student => {
				return this.props.user.login === student.git;
			})
			if (!user){
				return null;
			}
			return this.props.timeline.addedBy === user.name  ? (
				<Button negative size="mini" onClick={() => this.props.removeMemory(this.props.timeline.memoryID)}>
					Remove Memory
				</Button>
			) : null;
		}
	}

	render() {
		let img = null;
		if (this.props.timeline.img != null) {
			img = <Image src={this.props.timeline.img} />;
		}
		return (
			<div>
				<h3 className="vertical-timeline-element-title">{this.props.timeline.title}</h3>
				<h4 className="vertical-timeline-element-subtitle meta">Location: {this.props.timeline.location}</h4>
				<div className="line" />
				<h4 dangerouslySetInnerHTML={{ __html: this.props.timeline.content }} />
				<br />
				{/* <p>{this.props.timeline.content}</p> */}
				<React.Fragment>{img}</React.Fragment>
				<p>
					Added by: <span>{this.props.timeline.addedBy}</span>
				</p>
				{this.showRemoveButton()}
			</div>
		);
	}
}
