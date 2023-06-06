import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import DashboardLayout from './layouts/DashboardLayout'
// import LandingPageLayout from './layouts/LandingPageLayout'
import ConnectWalletLayout from './layouts/ConnectWalletLayout'
import ConnectWalletHome from './routes/ConnectWalletHome'
import DashboardHome from './routes/DashboardHome'
import ConnectWallet from './routes/ConnectWallet'
import './style/Home.css'
import Portfolio from './routes/Portfolio'
import ModalTest from './routes/ModalTest'


const router = createBrowserRouter([
  {
    path: '/',
    element: <ConnectWalletLayout />,
    children: [
      {
        path: '/',
        element: <ConnectWalletHome />,
      },
      {
        path: '/ConnectWallet',
        element: <ConnectWallet />,
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
  {
    path: '/ModalTest',
    element: <ModalTest />,
  },

])

export const App = () => <RouterProvider router={router} />
