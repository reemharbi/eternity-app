import React, { Component } from 'react';
import ProjectsList from './projectsList';
import Search from '../Search';
import './Projects.css';
import ModelAzzam from './../ModelAzzam';
import { Pagination, Divider, Container } from 'semantic-ui-react';
export default class Projects extends Component {
	state = {
		activePage: 1,
		boundaryRange: 1,
		siblingRange: 1
	};

	onChange = (v) => {
		this.setState({
			activePage: 1
		});
		this.props.onChange(v);
	};

	handlePaginationChange = (e, { activePage }) => {
		this.setState({ activePage });
	};

	render() {
		const { activePage, boundaryRange, siblingRange } = this.state;

		let showModel = null;

		if (this.props.azzam) {
			showModel = <ModelAzzam />;
		}
		return (
			<Container className="project" textAlign="center">
				{showModel}

				<Divider horizontal>Projects</Divider>
				<Search onChange={(v) => this.onChange(v)} value={this.props.searchValue} reset={this.props.reset} />

				<Divider />
				<ProjectsList projects={this.props.projects} activePage={this.state.activePage} />

				<Divider />
				<Pagination
					size='mini'
					activePage={activePage}
					boundaryRange={boundaryRange}
					onPageChange={this.handlePaginationChange}
					siblingRange={siblingRange-1}
					totalPages={Math.ceil(this.props.projects.length / 6)}
				/>
			</Container>
		);
	}
}
