import { ASYNC_START, ASYNC_END } from "../../utils/enums/actionTypes";

const promiseMiddleware = store => next => async action => {
  if (typeof action.call === 'function') {
    store.dispatch({ type: ASYNC_START, subtype: action.type });

    // try {
    //   const res = await request(action.call, action.args);
    //   action.payload = res;
    // } catch (error) {
    //   action.error = error;
    // }

    store.dispatch({ type: ASYNC_END, subtype: action.type, promise: action.payload });
  }

  next(action);
  return action
}

export default promiseMiddleware