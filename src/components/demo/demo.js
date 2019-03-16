import React from 'react';
import Comp from '.';

const btn = (props) => {
    if (props.node.a) {
        return <a onClick={e => {
            props.node.a = 0
            props.forceUpdate();
        }
        }>aaaaa</a>

    } else {
        return <a onClick={e => {
            props.node.a = 1
            props.forceUpdate();
        }}>bbbb</a>
    }
}

export default () => {
    return (
        <Comp toolBtns={[btn]} />
    )
}