import React from 'react';
import { Icon } from 'antd';
import Comp from '.';

const btn = (props) => {
    if (props.node.a) {
        return <Icon type="loading" onClick={e => {
            props.node.a = 0
            props.forceUpdate();
        }
        } />
    } else {
        return <Icon type="twitter" onClick={e => {
            props.node.a = 1
            props.forceUpdate();
        }
        } />
    }
}

export default () => {
    return (
        <Comp toolBtns={[btn]} />
    )
}