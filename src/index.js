import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import PostsHeader from './components/header';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
// react-router gotcha: without switch route matches loosely all routes: / and /posts/new
// Switch will iterate over its children elements (the routes) and only
// render the first one that matches the current pathname.
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <PostsHeader />
        <div className="container">
           <Switch>
              <Route path="/posts/new" component={PostsNew} />
              <Route path="/posts/:id" component={PostsShow} />
              <Route path="/" component={PostsIndex} />
           </Switch>
         </div>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
