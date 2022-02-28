const middlewareLogger = store => next => action => {
  console.log('Original State:', store.getState());
  console.log('Current Action:', action);
  next(action);
  console.log('New Updated State:', store.getState());
};

// logs the value of our store's original state, the current action, and the store's new updated state after we call next(action).

export default middlewareLogger;