import { USER_SIGNIN, USER_SIGNUP, USER_SIGNOUT } from '.././_actions/index';

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNIN:
        // TODO
        return {
        ...state,
        data: action.payload
        }

    case USER_SIGNUP:
        // TODO
        return {
        ...state,
        data: action.payload
        }

    case USER_SIGNOUT:
        // TODO
        return {
        ...state,
        data: action.payload
        }

    default:
      return state;
  }
};

export default userReducer;
