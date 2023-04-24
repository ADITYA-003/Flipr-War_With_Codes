import '../components/sidebar.css'
import User from './User';
import {Link} from "react-router-dom";
import React, { useState } from "react";
import {
  RiHome4Line,
  RiTeamLine,
  RiCalendar2Line,
  RiFolder2Line,
  RiUserFollowLine,
  RiPlantLine,
  RiStackLine,
  RiUserUnfollowLine
} from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import { ProSidebarProvider } from 'react-pro-sidebar';
import {
  Sidebar,
  SubMenu,
  Menu,
  MenuItem,
  useProSidebar
} from "react-pro-sidebar";
function Sidebars() {
  const [displayData, setDisplayData] = useState(false);
  const handleDisplay = () =>{
    setDisplayData(true);
  }
  const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(false);

  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div>
      <Sidebar
        className={`app ${toggled ? "toggled" : ""}`}
        style={{ height: "100%", position: "absolute",left:0,top:0,width:"20%",background:"#16badb " }}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      >
        <main>
          <Menu>
            {collapsed ? (
              <MenuItem
                icon={<FiChevronsRight />}
                onClick={handleCollapsedChange}
              ></MenuItem>
            ) : (
              <MenuItem
                suffix={<FiChevronsLeft />}
                onClick={handleCollapsedChange}
              >
                <div
                  style={{
                    padding: "9px",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 20,
                    letterSpacing: "1px",
                    color:"#230293"
                    
                  }}
                >
                  Spotify Podcast
                </div>
              </MenuItem>
            )}
            <hr />
          </Menu>

          <Menu>
            <MenuItem style={{color:"#646cff"}} icon={<RiHome4Line />} >
              <Link to="/post" > Dashboard
              </Link></MenuItem>
            <SubMenu  style={{color:"#646cff"}} defaultOpen label={"Professors"} icon={<RiTeamLine />}>
              <MenuItem icon={<RiUserFollowLine />}>Active </MenuItem>
              <MenuItem icon={<RiUserUnfollowLine />}>Ex Professors</MenuItem>
              <MenuItem icon={<RiCalendar2Line />}>Probation Period</MenuItem>
              <MenuItem icon={<RiUserFollowLine />}>Active </MenuItem>
              <MenuItem icon={<RiUserFollowLine />}>Active </MenuItem>
              
            </SubMenu>
            <SubMenu  style={{color:"#646cff"}} defaultOpen label={ <Link to ="/upload">AddRecords</Link> } icon={<RiFolder2Line />}>
          
              <MenuItem icon={<RiStackLine />} onClick={handleDisplay}>Display</MenuItem>
                    
              <MenuItem icon={<RiPlantLine />}>Junior Students</MenuItem>
              <MenuItem icon={<RiStackLine />}>Senior Students</MenuItem>
              <MenuItem icon={<RiPlantLine />}>Junior Students</MenuItem>
              <MenuItem icon={<RiStackLine />}>Senior Students</MenuItem>
              <MenuItem icon={<RiPlantLine />}>Junior Students</MenuItem>
            </SubMenu>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}
export default Sidebars;