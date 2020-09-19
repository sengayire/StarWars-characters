import jwtDecoder from 'jwt-decode';
import { loginActionsTypes } from '../../actionsTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case loginActionsTypes.LOGIN_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
    case loginActionsTypes.LOGIN_END:
      return {
        ...state,
        loading: false,
      };
    case loginActionsTypes.LOGIN_SUCCESS:
      return {
        ...state,
        data: {...payload},
        loading: false,
      };
    case loginActionsTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        message: payload,
        errors: {
          ...payload.errors,
        },
      };
    default:
      return state;
  }
};