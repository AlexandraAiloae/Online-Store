import React from 'react'
import "./UsersPageStyles.css"
import SidebarAdmin from '../../components/sidebarAdminPage/SidebarAdmin'
import NavbarAdmin from '../../components/navbarAdminPage/NavbarAdmin'
import Datatable from '../../components/datatable/Datatable'

function UsersPage() {
  return (
    <div className='users'>
        <SidebarAdmin/>
        <div className="usersContainer">
            <NavbarAdmin/>
            <Datatable />
        </div>

    </div>
  )
}

export default UsersPage