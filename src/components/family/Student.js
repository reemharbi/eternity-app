import React, { Component } from 'react'
import { Card, Icon, Image, Popup, Segment, Label, List } from 'semantic-ui-react'
import axios from 'axios';

import eman from './eman.jpg';
import question from './zodiac/question.svg';
import aquarius from './zodiac/aquarius-1.svg';
import libra from './zodiac/libra-1.svg';
import aries from './zodiac/aries-1.svg';
import cancer from './zodiac/cancer-1.svg';
import capricorn from './zodiac/capricornus-1.svg';
import gemini from './zodiac/gemini-1.svg';
import leo from './zodiac/leo-1.svg';
import pisces from './zodiac/pisces-1.svg';
import sagittarius from './zodiac/sagittarius-1.svg';
import scorpio from './zodiac/scorpio-1.svg';
import taurus from './zodiac/taurus-1.svg';
import virgo from './zodiac/virgo-1.svg';

export default class Student extends Component {
	constructor(props) {
		super(props);

		this.state = {
			git: {},
			studentName: ""
		}
	}

	componentDidMount() {
		axios({
			method: 'GET',
			url: `https://api.github.com/users/${this.props.student.git}`
		}).then(response => {
			this.setState({ git: response.data })
		});
		if (this.props.student && this.props.student.most_likely_to && this.props.authToAccess &&
			this.props.user && this.props.authToAccess.includes(this.props.user.login)) {
			const mostLikelyList = this.props.student.most_likely_to.map((thing, index) => {
				return (
					<List key={index}>
						<List.Icon name="paper plane outline right" />
						{thing}
					</List>
				);
			});

			this.setState((prevState, props) => {
				return {
					studentName: <Popup
						trigger={
							<h2>{this.props.student.name}</h2>
						}
					>
						{mostLikelyList}
					</Popup>
				}
			})
		} else {
			this.setState((prevState, props) => {
				return { studentName: <h2>{this.props.student.name}</h2> };
			})

		}
	}
	render() {

		let zodiacSign;
		// Zodiac Icons
		switch (this.props.student.zodiac_sign) {
			case "Aquarius":
				zodiacSign = aquarius;
				break;
			case "Libra":
				zodiacSign = libra;
				break;
			case "Cancer":
				zodiacSign = cancer;
				break;
			case "Capricorn":
				zodiacSign = capricorn;
				break;
			case "Aries":
				zodiacSign = aries;
				break;
			case "Gemini":
				zodiacSign = gemini;
				break;
			case "Leo":
				zodiacSign = leo;
				break;
			case "Pisces":
				zodiacSign = pisces;
				break;
			case "Sagittarius":
				zodiacSign = sagittarius;
				break;
			case "Scorpio":
				zodiacSign = scorpio;
				break;
			case "Taurus":
				zodiacSign = taurus;
				break;
			case "Virgo":
				zodiacSign = virgo;
				break;

			default:
				zodiacSign = question;
		}

		let perColor;
		// Personality label color
		switch (this.props.student.personality_type) {

			case "Advocate":
			case "Mediator":
			case "Protagonist":
			case "Campaigner":
				perColor = 'green';
				break;

			case "Architect":
			case "Logician":
			case "Commander":
			case "Debater":
				perColor = 'purple';
				break;

			case "Logistician":
			case "Defender":
			case "Executive":
			case "Consul":
				perColor = 'blue';
				break;

			case "Virtuoso":
			case "Adventurer":
			case "Entrepreneur":
			case "Entertainer":
				perColor = 'yellow';
				break;


			default:
				perColor = 'grey';
		}
		let isEman = true;

		if (this.props.student.name === 'Eman Yahya') {
			isEman = false;
		}

		let missing = null;

		if (this.props.student.name === 'Waleed Mastour' ||
			this.props.student.name === 'Turki Almalki') {
			missing = { color: 'red', content: 'MISSING', ribbon: true }
		}
		return (
			<Popup
				content={<Image src={eman} size='tiny' />}
				disabled={isEman}
				position='top right'
				trigger={<Card>
					<Segment inverted color={perColor}>
						<Card.Content header={this.state.studentName} />
					</Segment>
					<Image src={this.state.git.avatar_url}
						label={missing}
						size='mini' wrapped ui={false} />
					<Card.Content>
						<Segment.Group>
							<Segment> <h5>Team:</h5><p>{this.props.student.team}</p> </Segment>
							<Segment> <h5>Personality Type:</h5><Label color={perColor} >{this.props.student.personality_type}</Label></Segment>
							<Segment> <h5>Zodiac Sign:</h5> <Popup content={this.props.student.zodiac_sign} trigger={<Image src={zodiacSign} size='tiny' />} /> </Segment>

						</Segment.Group>

					</Card.Content>
					<Card.Content extra>

						<a href={`https://github.com/${this.props.student.git}`} rel="noopener noreferrer" target="_blank" >
							<Icon name="github square" size="big" />
						</a>

						<a href={this.props.student.linkedIn} rel="noopener noreferrer" target="_blank" >
							<Icon name="linkedin" size="big" />
						</a>

					</Card.Content>
				</Card>}
			/>

		)
	}
}
