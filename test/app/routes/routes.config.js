/*
 * @Author: Chosan.Zhangjianjun
 * @Date: 2019-02-21 17:20:55
 * @Last Modified by: Chosan.Zhangjianjun
 * @Last Modified time: 2019-02-21 17:43:22
 */

import React, { lazy } from 'react';
import App from '@pages/home';
import Demo from '@components/demo/demo'

// type: switch 则其 routes 中的路由会被封装在 React-Router#Switch 中
// type: redirect 代表 React-Router#Redirect
// type: undeinfed（无 type），代表页面，必须有 path 和 component 属性，用于 React-Router#Route


class A extends React.Component {
  componentDidMount() {
    console.log('11111')
  }
  render() {
    return '111'
  }
}


export default {
  path: '/',
  component: App,
  routes: [
    {
      type: 'switch',
      routes: [
        {
          path: '1',
          component: A
        },
        {
          path: '2',
          component: () => <span>哈哈哈，我是路由2</span>
        },
        {
          path: '3',
          routes: [
            {
              type: 'switch',
              routes: [
                {
                  type: 'switch'
                }
              ]
            }
          ]
        },
        {
          path: '4',
          component: Demo
        },
        {
          type: 'redirect',
          to: '/2'
        },
      ]
    }
    // {
    //   type: 'switch',
    //   routes: [
    //     {
    //       path: 'demo',
    //       component: lazy(() => import('../pages/Demo'))
    //     },
    //     {
    //       path: 'a',
    //       component: props => {
    //         return <>mmmmmm{props.yield}nnnn</>;
    //       },
    //       routes: [
    //         {
    //           path: 'c',
    //           component: () => 'ccccc'
    //         }
    //       ]
    //     },
    //     {
    //       path: 'b',
    //       component: () => 'bbbbb'
    //     },
    //     {
    //       path: 'testButton',
    //       component: lazy(() => import('../components/Button'))
    //     },
    //     {
    //       type: 'redirect',
    //       to: 'demo'
    //     }
    //   ]
    // }
  ]
};
