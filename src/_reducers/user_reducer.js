import {
  USER_SIGNIN,
  USER_SIGNUP,
  USER_SIGNOUT,
  USER_TOKEN,
  USER_EDIT,
  USER_DELETE,
} from "../_actions/types";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN:
      return {
        ...state,
        user: action.payload,
      };
    case USER_SIGNUP:
      return {
        ...state,
        register: action.payload,
      };
    case USER_SIGNOUT:
      return {};
    case USER_TOKEN:
      return {
        ...state,
        user: action.payload,
      };
    case USER_EDIT:
      return {
        ...state,
        edit: action.payload,
      };
    case USER_DELETE:
      return {
        ...state,
        delete: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
