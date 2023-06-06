import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import '../style/Header.css'

const DashboardLayout = () => {
  return (
    <div className='dash-layout'>
      <Header />
      {/* <Header /> */}
      <section className='d-flex mt-lg-2'>
        <Sidebar />
        <Outlet />
      </section>
      {/* <Sidebar /> */}
    </div>
  )
}

export default DashboardLayout