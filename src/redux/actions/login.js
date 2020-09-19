
import { loginActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (formData) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      url: '/core/api/auth/signin',
      data: {
        ...formData,
      },
      onStart: loginActionsTypes.LOGIN_START,
      onEnd: loginActionsTypes.LOGIN_END,
      onSuccess: loginActionsTypes.LOGIN_SUCCESS,
      onFailure: loginActionsTypes.LOGIN_FAILURE,
    }),
  );
