let logbMiddleware = store => next => action => {
  console.log("logBMiddleware-start");
  let result = next(action);
  console.log("Next State", store.getState());
  console.log("logBMiddleware-end");
  return result;
};
export default logbMiddleware;
