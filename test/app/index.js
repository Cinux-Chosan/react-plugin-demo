import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import HotApp from './App';

// 避免 React-hot-loader 多次执行该文件导致插入多个 root
let rootEl = document.getElementById('root');
if (!rootEl) {
    rootEl = document.createElement('div');
    rootEl.id = 'root';
    document.body.appendChild(rootEl);
}


ReactDOM.render(<HotApp />, rootEl);