import React from 'react';
import {CardNumberCount} from '../../App';
import Screen1 from '../../src/components/Features/screen1';

class ConsumerContext extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <CardNumberCount.Consumer>
          {(fname) => {
            console.log('api context', fname);
            {
              /* return <Screen1 cardCountIncrease={fname} />; */
            }
          }}
        </CardNumberCount.Consumer>
      </>
    );
  }
}

export default ConsumerContext;
// export {cardNumberCount};
