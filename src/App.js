import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as HashRouter, Route, Link } from 'react-router-dom';
import logo from './images/Triskelion_B.gif';
import logo_1 from './images/Triskelion_A.png';
import firebase, { auth, provider } from './firebase.js';
import Projects from './components/projects/Projects.js';
import Home from './Home';
import Materials from './components/materials/Materials';
import materials from './components/materials/MaterialsData';
import Family from './components/family/Family';
import Timeline from './components/timeline/Timeline';
import secretLogo from './images/secret_logo.gif';
import aaaLogo from './images/aaa_logo.png';
import pikminLogo from './images/pikmin_logo.png';
import saraCatsLogo from './images/sara_cats.jpg';
import axios from 'axios';
import UsmanCLI from './components/UsmanCLI.js';

import {
  Container,
  Image,
  Menu,
  Visibility,
  Popup,
  List,
  Icon,
  Label
} from 'semantic-ui-react';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease'
};

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
};

export default class App extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false
  };
  state = { activeItem: 'home' };
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      projects: [],
      displayedProjects: [],
      instructors: [],
      students: [],
      timeline: [],
      authToAccess: [],
      visibleLogo: logo,
      azzam: false,
      websiteAlive: true,

      user: null,
      userInfo: null,

      title: '',
      content: '',
      location: '',
      week: '',
      addedby: '',
      memoryID: ''
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  resetSearchValue = (e) => {
    this.setState((prevState, props) => {
      return {
        searchValue: '',
        azzam: false,
        displayedProjects: prevState.projects
      };
    });
  };

  changeAddedBy = (newValue) => {
    this.setState({
      addedBy: newValue
    });
  };
  removeMemory(memoryID) {
    const timelineRef = firebase.database().ref(`/timeline/${memoryID}`);
    timelineRef.remove();
  }
  handleChangeSelect = (e, { value }) => {
    this.setState({ week: value });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit(e) {
    const user = this.state.students.find((student) => student.git === this.state.userInfo.login);
    const img = e.target.querySelector('.image-upload').querySelector('img');
    e.preventDefault();
    const timelineRef = firebase.database().ref('timeline');
    const memory = {
      title: this.state.title,
      location: this.state.location,
      week: this.state.week,
      content: this.state.content,
      addedBy: user.name,
      img: img ? img.src : null
    };
    timelineRef.push(memory);
    this.setState({
      title: '',
      location: '',
      week: '',
      content: '',
      addedBy: ''
    });
  }

  login() {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      this.setState({
        user
      });
      axios({
        method: 'GET',
        url: `https://api.github.com/user/${this.state.user.providerData[0].uid}`
      }).then((response) => {
        this.setState({ userInfo: response.data });
      });
    });
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null,
        userInfo: null
      });
    });
  }
  handleSearchValue = (e) => {
    const newSearchValue = e.target.value;

    if (newSearchValue.toLowerCase() === 'sei') {
      this.setState((prevState, props) => {
        return {
          visibleLogo: secretLogo
        };
      });
    }

    if (newSearchValue.toLowerCase() === 'eternity') {
      this.setState((prevState, props) => {
        return {
          visibleLogo: logo
        };
      });
    }

    if (newSearchValue.toLowerCase() === 'aaa') {
      this.setState((prevState, props) => {
        return {
          visibleLogo: aaaLogo
        };
      });
    }

    if (newSearchValue.toLowerCase() === 'pikmin') {
      this.setState((prevState, props) => {
        return {
          visibleLogo: pikminLogo
        };
      });
    }
    if (newSearchValue.toLowerCase() === 'sara') {
      this.setState((prevState, props) => {
        return {
          visibleLogo: saraCatsLogo
        };
      });
    }
    if (newSearchValue.toLowerCase() === 'azzam') {
      this.setState((prevState, props) => {
        return {
          azzam: true
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          azzam: false
        };
      });
    }

    this.setState((prevState, props) => {
      const filteredProjects = prevState.projects.filter((project) => {
        return (
          project.name.toLowerCase().includes(newSearchValue.toLowerCase()) ||
          project.by.some((person) => {
            return person.toLowerCase().includes(newSearchValue.toLowerCase());
          }) ||
          (project.team_name !== undefined
            ? project.team_name.toLowerCase().includes(newSearchValue.toLowerCase())
            : false) ||
          project.no === Number(newSearchValue)
        );
      });

      return {
        searchValue: newSearchValue,
        displayedProjects: filteredProjects
      };
    });
  };

  killWebsite = (e) => {
    this.setState((prevState, props) => {
      return {
        websiteAlive: false
      };
    });
  };

  componentDidMount() {
    const projectsRef = firebase.database().ref('projects');
    const instructorsRef = firebase.database().ref('instructors');
    const studentsRef = firebase.database().ref('students');
    const timelineRef = firebase.database().ref('timeline');
    const authToAccessRef = firebase.database().ref('auth_to_access');

    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        axios({
          method: 'GET',
          url: `https://api.github.com/user/${this.state.user.providerData[0].uid}`
        }).then((response) => {
          this.setState({
            userInfo: response.data
          });
        });
      }
    });

    projectsRef.on('value', (snapshot) => {
      let newState = snapshot.val();

      this.setState((prevState, props) => {
        return {
          projects: newState,
          displayedProjects: newState
        };
      });
    });

    authToAccessRef.on('value', snapshot => {
      let newState = snapshot.val();

      this.setState((prevState, props) => {
        return {
          authToAccess: newState
        }
      })
    });

    instructorsRef.on('value', (snapshot) => {
      let newState = snapshot.val();

      this.setState((prevState, props) => {
        return {
          instructors: newState
        };
      });
    });

    studentsRef.on('value', (snapshot) => {
      let newState = snapshot.val();

      this.setState((prevState, props) => {
        return {
          students: newState
        };
      });
    });

    timelineRef.on('value', (snapshot) => {
      let timelineList = snapshot.val();
      let newState = [];
      for (let timeline in timelineList) {
        newState.push({
          memoryID: timeline,
          title: timelineList[timeline].title,
          location: timelineList[timeline].location,
          week: timelineList[timeline].week,
          content: timelineList[timeline].content,
          addedBy: timelineList[timeline].addedBy,
          img: timelineList[timeline].img ? timelineList[timeline].img : null
        });
      }

      this.setState((prevState, props) => {
        return {
          timeline: newState.sort((a, b) => a.week.replace("week", "") - b.week.replace("week", ""))
        };
      });
    });
  }

  render() {
    const { menuFixed } = this.state;

    //handling user name to show
    let displayName = null;
    if (this.state.userInfo) {
      displayName = this.state.students.find((student) => {
        return student.git === this.state.userInfo.login;
      });
    }
    if (displayName) {
      displayName = displayName.name;
    } else {
      displayName = this.state.userInfo ? this.state.userInfo.login : null;
    }

    if (this.state.websiteAlive) {
      return (
        <>
          <HashRouter basename="/">
            <Visibility onBottomPassed={this.stickTopMenu} onBottomVisible={this.unStickTopMenu} once={false}>
              <Menu
                stackable
                fluid widths={6}
                borderless
                fixed={menuFixed ? 'top' : undefined}
                style={menuFixed ? fixedMenuStyle : menuStyle}
              >
                <Container text>
                  <Menu.Item>
                    <Link to="/">
                      {' '}
                      <Image size="small" src={this.state.visibleLogo} />{' '}
                    </Link>
                  </Menu.Item>
                  <Menu.Item header>
                    <Link to="/" className="link">
                      Eternity
									</Link>
                  </Menu.Item>
                  <Menu.Item as="a">
                    {' '}
                    <Link to="/materials" className="link">
                      Materials
									</Link>
                  </Menu.Item>
                  <Menu.Item as="a">
                    <Link to="/projects" className="link">
                      Projects
									</Link>
                  </Menu.Item>
                  <Menu.Item as="a">
                    <Link to="/family" className="link">
                      The Family
									</Link>
                  </Menu.Item>
                  <Menu.Item as="a">
                    <Link to="/timeline" className="link">
                      Timeline
									</Link>
                  </Menu.Item>
                  <Menu.Item>
                    {this.state.user && this.state.userInfo ? (
                      <Popup
                        position="bottom center"
                        on="click"
                        pinned
                        trigger={
                          <Label basic as="a" color="black">
                            <Icon name="user" />
                            {displayName}
                          </Label>
                        }
                      >
                        <List>
                          <List.Item>
                            <Label as="a" basic color="red" onClick={this.logout}>
                              <Icon name="power off" />
                              Sign out
													</Label>
                          </List.Item>
                        </List>
                      </Popup>
                    ) : (
                        <Label basic onClick={this.login} size="large" as="a" color="blue">
                          Sign in
										</Label>
                      )}
                  </Menu.Item>
                </Container>
              </Menu>
            </Visibility>

            <div class="wrapper">
              <Route exact path="/" component={Home} />
              {/* Used render instead of component to add props, so it doesn't change the DOM node each time it render */}
              <Route
                path="/projects"
                render={(props) => (
                  <Projects
                    projects={this.state.displayedProjects}
                    onChange={this.handleSearchValue}
                    searchValue={this.state.searchValue}
                    azzam={this.state.azzam}
                    reset={this.resetSearchValue}
                    {...props}
                  />
                )}
              />
              <Route path="/materials" component={() => <Materials materials={materials} />} />
              <Route
                path="/family"
                component={() => (
                  <Family
                    instructors={this.state.instructors}
                    students={this.state.students}
                    user={this.state.userInfo}
                    authToAccess={this.state.authToAccess}
                    usman={this.killWebsite}
                  />
                )}
              />
              <Route
                path="/timeline"
                render={(props) => (
                  <Timeline
                    timeline={this.state.timeline}
                    user={this.state.userInfo}
                    students={this.state.students}
                    instructors={this.state.instructors}
                    handleChange={this.handleChange}
                    location_name={this.state.location}
                    title={this.state.title}
                    content={this.state.content}
                    week={this.state.week}
                    handleChangeSelect={this.handleChangeSelect}
                    handleSubmit={this.handleSubmit}
                    removeMemory={this.removeMemory}
                    {...props}
                  />
                )}
              />
            </div>


          </HashRouter>
          <div class="ui bottom menu inverted centered stay-down-please">
            <Container style={{ padding: '2em 0em' }} vertical>
              <p className="pikmin">
                <Image src={logo_1} size="mini" centered />
                Made with ♥ by The Pikmin
              </p>
            </Container>
          </div>
        </>
      );
    } else {
      return <UsmanCLI />;
    }
  }
}
