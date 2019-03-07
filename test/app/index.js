import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root'
import './index.scss';
import Demo from '@components/demo';

// React-hot-loader 会多次执行该文件
let rootEl = document.getElementById('root');
if (!rootEl) {
    rootEl = document.createElement('div');
    rootEl.id = 'root';
    document.body.appendChild(rootEl);
}

const App = () => <Demo hi="This is a demo." />;

const HotApp = hot(App);

ReactDOM.render(<HotApp />, rootEl);