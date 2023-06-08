import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import './SideBar.css'
import { SideBarData } from './SideBarData'

function SideBar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <div className="container">
        <FaIcons.FaBars className="nav-icon" onClick={showSidebar} />
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            {/* <AiIcons.AiOutlineClose className="nav-icon" /> */}
          </li>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                {React.cloneElement(item.icon, { className: 'nav-icon' })}
                <span>{item.title}</span>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default SideBar
