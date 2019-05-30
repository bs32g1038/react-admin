import React from 'react';
import Dashboard from '../pages/Dashboard'
import BasicLayout from '../layouts/BasicLayout'
import RouteView from '../layouts/RouteView'
import { Redirect } from 'react-router-dom'

export default [
    {
        path: '/',
        component: BasicLayout,
        routes: [
            {
                path: ['/', '/dashboard'],
                exact: true,
                component: () => (
                    <Redirect push to='/dashboard/analysis' />
                )
            },
            {
                path: '/dashboard',
                title: '仪表盘',
                icon: 'dashboard',
                component: RouteView,
                routes: [
                    {
                        path: '/dashboard/analysis',
                        title: '分析页',
                        component: Dashboard,
                    }
                ]
            }
        ]
    }
]