import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import DashboardLayout from './layouts/DashboardLayout'
import LandingPageLayout from './layouts/LandingPageLayout'
import Home from './routes/Home'
import DashboardHome from './routes/DashboardHome'
import './style/Home.css'
import Portfolio from './routes/Portfolio'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
  {
    path: '/Dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/DashboardHome',
        element: <DashboardHome />,
      },
    ],
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  
])

export const App = () => <RouterProvider router={router} />
