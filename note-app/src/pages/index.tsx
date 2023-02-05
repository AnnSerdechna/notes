import { FC, lazy, memo } from 'react'
import { createBrowserRouter, Outlet, RouteObject, RouterProvider } from 'react-router-dom'

import {Layout, Loader} from '../components'

const Home = lazy<FC>(() => import('./home'))
const Reminders = lazy<FC>(() => import('./reminders'))
const Label = lazy<FC>(() => import('./label'))
const Archive = lazy<FC>(() => import('./archive'))
const Trash = lazy<FC>(() => import('./trash'))

const routes: RouteObject[] = [
  {
    element: <Layout />,
    loader: () => <Loader />,
    path: '',
    children: [
      {
        element: <Home />,
        path: '',
        index: true,
      },
      {
        element: <Reminders />,
        path: '/reminders',
      },
      {
        element: <Label />,
        path: '/label',
      },
      {
        element: <Archive />,
        path: '/archive',
      },
      {
        element: <Trash />,
        path: '/trash',
      },
      {
        element: <Outlet />,
        path: '*',
      },
    ],
  },
]

const router = createBrowserRouter(routes)

const PageProvider = () => <RouterProvider router={router} />

export default memo(PageProvider)
