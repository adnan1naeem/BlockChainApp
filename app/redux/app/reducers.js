import * as types from './types';

const initialState = {
  finishIntro: false,
};

export default (state = initialState, action) => {
  const {type, payload, error, meta} = action;
  switch (type) {
    case types.FINISH_INTRO: {
      return {
        ...state,
        finishIntro: true,
      };
    }
    default:
      return state;
  }
};
