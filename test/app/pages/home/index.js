import React from 'react'

export default class extends React.Component {
    render() {
        return <>
            {this.props.yield}
        </>
    }
}