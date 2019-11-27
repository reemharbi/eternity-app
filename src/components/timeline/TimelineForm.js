import React, { Component } from 'react';
import { Form, Button, Select, TextArea } from 'semantic-ui-react';
import ImageUpload from './ImageUpload';

const options = [
	{ key: '1', text: 'Week 1', value: 'week 1' },
	{ key: '2', text: 'Week 2', value: 'week 2' },
	{ key: '3', text: 'Week 3', value: 'week 3' },
	{ key: '4', text: 'Week 4', value: 'week 4' },
	{ key: '5', text: 'Week 5', value: 'week 5' },
	{ key: '6', text: 'Week 6', value: 'week 6' },
	{ key: '7', text: 'Week 7', value: 'week 7' },
	{ key: '8', text: 'Week 8', value: 'week 8' },
	{ key: '9', text: 'Week 9', value: 'week 9' },
	{ key: '10', text: 'Week 10', value: 'week 10' },
	{ key: '11', text: 'Week 11', value: 'week 11' },
	{ key: '12', text: 'Week 12', value: 'week 12' }
];
export default class TimelineForm extends Component {




	onSubmitHandle = e => {
		this.props.close();
		this.props.handleSubmit(e);
	}
	render() {
		const { title, location_name, week, content } = this.props;
		let isDisabled = true;
		if (title && location_name && content && week) {
			isDisabled = false;
		}
		return (
			<Form onSubmit={this.onSubmitHandle}>
				<Form.Field >
					<label>*Title</label>
					<input
						placeholder="Title"
						name="title"
						onChange={this.props.handleChange}
						value={title}
					/>
				</Form.Field>
				<Form.Field>
					<label>*Location</label>
					<input
						placeholder="Location"
						name="location"
						onChange={this.props.handleChange}
						value={location_name}
					/>
				</Form.Field>
				<Form.Field
					control={Select}
					name="week"
					label="*Week"
					options={options}
					onChange={this.props.handleChangeSelect}
					placeholder="week"
					value={week}
				/>
				<Form.Field
					control={TextArea}
					name="content"
					label="*Content"
					placeholder="What happened that day? ..."
					onChange={this.props.handleChange}
					value={content}
				/>
				<Form.Field className="image-upload">
					<ImageUpload />
				</Form.Field>
				<p>* Required fileds</p>
				<Button primary type="submit" disabled={isDisabled}>
					Submit
				</Button>
			</Form>
		);
	}
}
