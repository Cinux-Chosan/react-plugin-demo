import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root'
import './index.scss';
import Demo from '@components/demo';

// 避免 React-hot-loader 多次执行该文件导致插入多个 root
let rootEl = document.getElementById('root');
if (!rootEl) {
    rootEl = document.createElement('div');
    rootEl.id = 'root';
    document.body.appendChild(rootEl);
}

const App = () => <Demo hi="This is a demo." />;

const HotApp = hot(App);

ReactDOM.render(<HotApp />, rootEl);