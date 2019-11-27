import React, { Component } from 'react';
import { Label, Popup, Image, Card, Icon, Segment, Button, Header, Modal, List } from 'semantic-ui-react';
import './Instructor.css';

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

export default class Instructor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      instructorName: ""
    }
  }
  
  componentDidMount(){
    if (this.props.instructor && this.props.instructor.most_likely_to && this.props.authToAccess &&
			this.props.user && this.props.authToAccess.includes(this.props.user.login)) {
      const mostLikelyList = this.props.instructor.most_likely_to.map((thing, index) => {
        return (
          <List key={index}>
            <List.Icon name="paper plane outline right" />
            {thing}
          </List>
        );
      });

      this.setState((prevState, props) => {
        return {
          instructorName: <Popup
            trigger={
                <h2>{this.props.instructor.name}</h2>
            }
          >
            {mostLikelyList}
          </Popup>
        }
      })
    } else {
      this.setState((prevState, props) => {
        return { instructorName: <h2>{this.props.instructor.name}</h2>};
      })

    } 
  }

  render() {
    // list of most likely to

    let instAge = this.props.instructor.age;
    if (this.props.instructor.name === 'Usman Bashir') {
      instAge = <Modal trigger={<p>Undefined</p>} closeIcon>
        <Header icon='user secret' content="D̶̲̘͔̗̠͓̆̆̎̉͑̈́̂͜͠ơ̴͕̒ņ̴̰͉̺̭̩͛̽̓̓'̶̨͉̗̞̳̹͖̣̇̇͑̑̍̚ť̷̢̲̥̣̻͕.̴̲̞̘̳̣̘͚̾ͅ.̵͇̠̺̫̙̟̇.̸͓̜̼̟͚̅̅͝͝.̴̨̮̹̩̠̞̳̅̂͆̊͠ ̸͖̔͛́̉̕͘š̸̢̥͙͉͎͗͑͋͑t̶̢̯́̊͛͆̈́͂͛̕a̶̡̧̩̤͖̬̱̍̿̆̿y̶̳̝̝͖̌̑̅͂ ̷̘̔̋̈̈́̈́̓͘ḁ̵̧̺͔͒̈́̃͘̚͝w̸̧̯͍̜̉̃a̶̢͎̻͗̈́̾̄̚ẙ̴̫̻̎͘̕͠͝.̴͂̾̓́͠ͅ.̴̧͎͔̺͙͉͇͐͐̚̚.̵͙͉͚̰̗̔͐ ̴̛̣̜̪̟̟̪̣̽͒͒̊͠l̸͔̳̯̓͋͑͒͘ẽ̴͚̿̈́̿̿̓̏a̷̧͛̓v̴̥̱͈͉͓̗́̏͑̂̓e̵͚̾̒ ̸̙̰̩̹͙̫͌͊̏̆̉͝͠b̶͈͆͒̈͘ē̴̬̟̘̪̹̈̔̐͘̚͜͠f̷̢̰̆̅̆̍͑̋͑͜͜o̸̝̥̹͇̺͚̺̿̈́̒͠͝r̶͕̓̎̆̏͆̿̅͠é̴̟̝̻͚̳͆͑̀̕͝ ̸̜̍̏͛̔̓͘͠i̶̢͙̖̘̤͔̊͋͊͂͒͑͝ẗ̸̳̠́̈́̈́̔͠'̸̨̥̲̬̮͉̓͒̽͒̋s̶̼̓̃̎̎̆͑̈́̕ ̶̛̭͖̝͌ṭ̸̩̿̈̋͂̃̃͠ơ̶͈̫͓̭̆͒ͅo̸̠̹̪͚̭̠̒̂͜ ̶̰̜͉̟͚̇̓͂͠͠l̵̢̜̹͍͇̞͚͊̐̽͆̿̅̍̚͜á̴̤͌́̔t̶̞͕͈̗̠̗̓ȩ̷̭̫͎̎̓̃̈́͘͘ͅ" />
        <Modal.Content>
          <p>
            Are you sure you want to try to learn what shall remain unknown?
              </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='purple'
            onClick={this.props.usman}>
            <Icon name='cloudscale' /> Yes
              </Button>

        </Modal.Actions>
      </Modal>
    }
    let zodiacSign;
    // Zodiac Icons
    switch (this.props.instructor.zodiac_sign) {
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
    switch (this.props.instructor.personality_type) {

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
    return (


      <Card fluid >

        <Segment.Group>
          <Segment color={perColor} inverted>

            {this.state.instructorName}

          </Segment>
          <Segment.Group horizontal>
            <Segment >
              <Image src={this.props.instructor.img_url} size="medium" centered="true" /></Segment>
            <Segment>
              <Segment.Group>
                <Segment inverted> <h4>{this.props.instructor.title}</h4> </Segment>
                <Segment color='black'> <h5>Age:</h5><p>{instAge}</p> </Segment>
                <Segment> <h5>Personality Type:</h5><Label color={perColor} >{this.props.instructor.personality_type}</Label> </Segment>
                <Segment centered> <h5>Zodiac Sign:</h5><Popup content={this.props.instructor.zodiac_sign} trigger={<Image src={zodiacSign} size='small' centered="true" />} /></Segment>
              </Segment.Group>
            </Segment>
          </Segment.Group>
          <Segment className="quote"> <h2>{`"${this.props.instructor.quote}"`}</h2> </Segment>
          <Segment>
            <a href={this.props.instructor.git} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size="huge" />
            </a>
            <a href={this.props.instructor.linkedIn} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size="huge" />

            </a>

          </Segment>
        </Segment.Group>

      </Card>

    )
  }
}
