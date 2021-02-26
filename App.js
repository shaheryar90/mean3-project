import React, {createContext, Component} from 'react';
import Navigation from './src/components/Navigation/navigation';
import ScreenLogo from './src/SplashScreen/screenLogo';
// import CardContext from './src/context/cartContext';

const CardNumberCount = createContext();

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
            cardCount: this.state.cardCount,
            cardCountIncrease: () => {
              this.setState({cardCount: cardCount + 1});
            },
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
