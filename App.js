import React, {Component} from 'react';
import Navigation from './src/components/Navigation/navigation';
import ScreenLogo from './src/SplashScreen/screenLogo';
class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 2000);
  }
  render() {
    if (this.state.loading == true) {
      return <ScreenLogo />;
    } else {
      return <Navigation />;
    }
  }
}

export default App;

// export default App;
