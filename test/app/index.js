import React from 'react';
import ReactDOM from 'react-dom';
import Demo from '@components/demo';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
    <div>
        <Demo hi="This is a demo." />
    </div>,
    root
);