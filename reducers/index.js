import { combineReducers } from "redux";

import categoryReducer from "./categories";

const rootReducer = combineReducers({

  categories: categoryReducer,
  
});

export default rootReducer;
