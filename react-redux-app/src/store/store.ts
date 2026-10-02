import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { rootReducer } from "./reducers";

// No preloaded state; explicit undefined lets TS pick the enhancer overload
export const store = createStore(rootReducer, undefined, applyMiddleware(logger));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
