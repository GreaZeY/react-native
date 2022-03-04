import { combineReducers } from "redux";

import categoryReducer from "./categories";
import productsReducer from "./products";

const rootReducer = combineReducers({

  categories: categoryReducer,
  products: productsReducer
  
});

export default rootReducer;
