import React, {createContext, Component} from 'react';
import Navigation from './src/components/Navigation/navigation';
import ScreenLogo from './src/SplashScreen/screenLogo';
// import CardContext from './src/context/cartContext';

const CardNumberCount = createContext({
  // cardCount:0

});

class App extends Component {
  constructor() {
    super();
  
    this.state = {
      loading: true,
      cardCount: 0,
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
      return (
        <CardNumberCount.Provider
          value={{
            cardCountIncrease: () => {
              this.setState({cardCount: cardCount + 1});
            },
            cardCount: this.state.cardCount,
          }}>
          <Navigation />
        </CardNumberCount.Provider>
      );
    }
  }
}
var appf;

export default App;
export {CardNumberCount};

// export default App;
