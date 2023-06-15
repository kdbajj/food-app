import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import './SideBar.css'
import { SideBarData } from './SideBarData'
import { IconContext } from 'react-icons'
import { hover } from '@testing-library/user-event/dist/hover'

function SideBar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <div className="navbar">
        <div className="menu-bars">
          <FaIcons.FaBars className="menu-icon" onClick={showSidebar} />
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <AiIcons.AiOutlineClose className="nav-icon" />
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  {React.cloneElement(item.icon, { className: 'nav-icon' })}
                  <span className="nav-icon">{item.title}</span>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default SideBar
