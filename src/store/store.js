import { spamFilter } from './middleware';
import {applyMiddleware,legacy_createStore as createStore} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import {rootReducer} from "./rootReducer";
import {thunk} from "redux-thunk";

const composedEnhancer  = composeWithDevTools(applyMiddleware(
    thunk,
    spamFilter
  )
);
export const store = createStore(rootReducer, composedEnhancer)

