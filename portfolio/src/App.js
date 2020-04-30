import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';
import LayoutSignin from './layouts/LayoutSignin';

// Views 
import Home from './views/Home';
import Projects from './views/Projects';
import About from './views/About';
import Login from './views/Login';
import Signup from './views/Signup';

class App extends React.Component {

  componentDidMount() {
    document.body.classList.add('is-loaded')
    this.refs.scrollReveal.init();
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.refs.scrollReveal.init();
    }
  }

  render() {
    return (
      <ScrollReveal
        ref="scrollReveal"
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
            <AppRoute exact path="/projects" component={Projects} layout={LayoutDefault} />
            <AppRoute exact path="/about" component={About} layout={LayoutDefault} />
            <AppRoute exact path="/login" component={Login} layout={LayoutSignin} />
            <AppRoute exact path="/signup" component={Signup} layout={LayoutSignin} />
          </Switch>
        )} />
    );
  }
}

export default withRouter(props => <App {...props} />);