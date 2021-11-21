import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';
//store 里面包含了所有的reducers和state（也就是data）
//如果我们想要改变state的话，我们必须要用特定的行为，也就是必须要使用action creator创建一个action

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root')
);