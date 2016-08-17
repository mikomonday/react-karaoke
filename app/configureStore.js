import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {responsiveStoreEnhancer} from 'redux-responsive'


export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
      responsiveStoreEnhancer, //redux-responsive
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f //Browser Extension
    ),
  );

  
  if(module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers/rootReducer').default;

      store.replaceReducer(nextReducer);
    });
  }
  return store;
}