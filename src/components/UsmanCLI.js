import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

export default class UsmanCLI extends Component {
	style = `
    html, body {
      background-color: #000000 !important;
    }
    p {
      color: white;
      font-size: 60px:
      font-family: "Consolas"
    }
    .green {
      color: green;
    }
    .blue {
      color: blue;
    }
    span {

    }
  }
  `;
	constructor(props) {
		super(props);

		this.state = {
			secretText: '',
			savedText: 'sudo  rm  -rf  /',
			pos: 0,
			secretText1: '',
			savedText1: 'rm: /sei/projects: projects has been deleted',

			secretText2: '',
			savedText2: 'rm: /pikmin/red: RIP Hazim',

			secretText3: '',
			savedText3: 'rm: /pikmin/yellow: RIP Reem',

			secretText4: '',
			savedText4: 'rm: /pikmin/blue: RIP Bedour',

			secretText5: '',
			savedText5: 'rm: /pikmin: Goodbye Pikmin'
		};
	}

	componentDidMount() {
		setTimeout(this.changeText.bind(this), 1000);
	}

	changeText() {
		this.setState((prevState, props) => {
			return {
				secretText: prevState.secretText + prevState.savedText.charAt(prevState.pos),
				pos: prevState.pos + 1
			};
		});
		if (this.state.pos < this.state.savedText.length) {
			setTimeout(this.changeText.bind(this), 200);
		} else {
			setTimeout(this.text1.bind(this), 2000);
		}
	}
	text1 = () => {
		this.setState((prevState, props) => {
			return {
				secretText1: prevState.savedText1
			};
		});
		setTimeout(this.text2.bind(this), 2000);
	};
	text2 = () => {
		this.setState((prevState, props) => {
			return {
				secretText2: prevState.savedText2
			};
		});
		setTimeout(this.text3.bind(this), 2000);
	};
	text3 = () => {
		this.setState((prevState, props) => {
			return {
				secretText3: prevState.savedText3
			};
		});
		setTimeout(this.text4.bind(this), 2000);
	};
	text4 = () => {
		this.setState((prevState, props) => {
			return {
				secretText4: prevState.savedText4
			};
		});
		setTimeout(this.text5.bind(this), 2000);
	};
	text5 = () => {
		this.setState((prevState, props) => {
			return {
				secretText5: prevState.savedText5
			};
		});
	};

	render() {
		return (
			<Container>
				<style>{this.style}</style>

				<p>
					<span className="green">ThePikmin@PC-A4JAE23</span>:<span className="blue">/sei/projects/eternity</span>
				</p>
				<p>$ {this.state.secretText}</p>
				<p>{this.state.secretText1}</p>
				<p>{this.state.secretText2}</p>
				<p>{this.state.secretText3}</p>
				<p>{this.state.secretText4}</p>
				<p>{this.state.secretText5}</p>
			</Container>
		);
	}
}
