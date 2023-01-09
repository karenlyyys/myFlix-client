import React from 'react';
import ReactDOM from 'react-dom';
import MainView from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';
import { Provider } from 'react-redux';
import moviesApp from './reducers/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { createStore } from 'redux';

import './index.scss';

const myFlixStore = createStore(moviesApp, devToolsEnhancer());

class MyFlixApplication extends React.Component {
  render() {
    return (
      <Provider store={myFlixStore}>
      <Container>
        <MainView />
      </Container>
      </Provider>
           );
          }
      }


// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);
