import React from 'react'
import "./AdminPageStyles.css";
import SidebarAdmin from '../../components/sidebarAdminPage/SidebarAdmin';
import NavbarAdmin from '../../components/navbarAdminPage/NavbarAdmin';

function AdminPage() {
  return (
    <div className='home'>
      < SidebarAdmin />
      <div className="homeContainer">
        < NavbarAdmin />
        home container
      </div>
    </div>
  )
}

export default AdminPage
