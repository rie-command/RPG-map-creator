/**
 * Created by Sinires on 18.07.2016.
 */
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducers/index";
import createLogger from "redux-logger";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
    const logger = createLogger();
    let store = {};
    if (DEVELOPMENT) {
        store = createStore(rootReducer,
            initialState,
            compose(applyMiddleware(thunk, logger),
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
        );
    } else {
        store = createStore(rootReducer,
            initialState,
            applyMiddleware(thunk, logger)
        );
    }
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
