import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';



import rootReducer from '../reducers';

let appliedMiddleware = applyMiddleware( thunkMiddleware );
console.log(process.env.NODE_ENV)
if ( process.env.NODE_ENV === `development` ) {
    // const { createLogger } = require(`redux-logger`);
    // let loggerMiddleware = createLogger();

    // appliedMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware);
    appliedMiddleware = applyMiddleware( thunkMiddleware );
}

// create store using preloaded state
const store = createStore( rootReducer,
    compose(
        appliedMiddleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function ( f ) {
            return f;
        }
    )
);



export default store;