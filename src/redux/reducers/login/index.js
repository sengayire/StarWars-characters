
import { login as initialState } from '../../store/initialState';
import login from './login';

export default (state = initialState, action) => ({
  ...state,
  ...login(state, action),
});