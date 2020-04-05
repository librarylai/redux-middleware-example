let logaMiddleware = store => next => action => {
  console.log("logAMiddleware-start");
  let result = next(action);
  console.log("logAMiddleware-end");
  return result;
};
export default logaMiddleware;
