import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
  cardNumber: 0,
};

export default (state = INITIAL_STATE, action) => {
  // console.log('red', appliedJobs)
  switch (action.type) {
    case ActionTypes.cardNumber:
      return {
        ...state,
        cardNumber: action.payload,
      };

    default:
      return state;
  }
};
