import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

export default class Search extends Component {
	componentWillUnmount() {
		this.props.reset();
	}
	render() {
		return (
			<div>
				<Input
					icon="search"
					placeholder="Search..."
					type="search"
					name="search"
					value={this.props.value}
					onChange={(v) => this.props.onChange(v)}
				/>
			</div>
		);
	}
}
