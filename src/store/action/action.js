import ActionTypes from '../constant/constant';

export function cartNumberCount(cardNumber) {
  return (dispatch) => {
    dispatch({type: ActionTypes.cardNumber, payload: cardNumber});
  };
}
