// "hot(App)" shall only be used as export.
// Please refer to "Getting Started" (https://github.com/gaearon/react-hot-loader/).
import React from 'react';
import { hot } from 'react-hot-loader/root'
import Demo from '@components/demo/demo';




const App = () => {
    return (
            <Demo/>
    )
}
export default hot(App);