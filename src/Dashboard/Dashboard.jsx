import { useState } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import CustomButton from "../Components/CustomButton";

// FOR SIDEBAR
import { Sidebar, Menu, MenuItem, useProSidebar, Badge, SubMenu } from "react-pro-sidebar";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const Dashboard = () => {
  const { collapseSidebar, isCollapsed } = useProSidebar();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(isCollapsed);

  const handleToggleSidebar = () => {
    if (sidebarCollapsed) {
      collapseSidebar();
    } else {
      collapseSidebar();
    }
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="dashboard_main_container">
      <div className="header_container">
        <div className="logo_container">
          <img src="../../img/logo.png" />

          <span>Wiremi</span>
        </div>

        <div className="header_actions_container">
          <div className="side_bar_menu_icon" onClick={handleToggleSidebar}>
            <FontAwesomeIcon
              icon={faBars}
              fontSize={25}
              color="var(--global-grey)"
            />
          </div>

          <div className="actions_container">
            <CustomButton
              backgroundColor="var(--primary-color)"
              width={200}
              borderRadius={6}
            >
              View as Client
            </CustomButton>

            <div className="search_container">
              <div className="search_input_box">
                <input type="text" placeholder="Search Mail" />
              </div>
              <div className="search_icon_container">
                <div className="search_icon">
                  <FontAwesomeIcon
                    icon={faSearch}
                    fontSize={20}
                    color="white"
                  />
                </div>
              </div>
            </div>

            <div className="actions_extras_container">
              <FontAwesomeIcon icon={faBell} fontSize={29} color="#898989" />
              <FontAwesomeIcon
                icon={faEnvelope}
                fontSize={29}
                color="#898989"
              />
            </div>

            <div className="profile_header_container">
              <div className="profile_pic_container">
                <img src="../../img/profile.png" className="profile_pic" />
              </div>

              <div className="profile_name">
                Larson
                <div className="dropdown_container">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    color="var(--global-grey)"
                    fontSize={16}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="app" className="sidebar_container">
        <Sidebar className="main_sidebar">
          <Menu
            menuItemStyles={{
              icon: {
                color: "var(--global-icon)",
              },
              label: () => ({
                fontWeight: 350,
                fontFamily: "var(--main-font)",
                fontSize: "19px"
              }),
            }}
          >
            <div
              className="siderbar_section_title"
              style={{
                padding: "1.5rem",
                textAlign: "left",
                fontFamily: "var(--main-font)",
              }}
            >
              {" "}
              <div>Main</div>
            </div>
            <SubMenu
                label="Charts"
                icon={<HomeRoundedIcon />}
                suffix={
                  <Badge variant="danger" shape="circle">
                    6
                  </Badge>
                }
              >
                <MenuItem> Pie charts</MenuItem>
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
              </SubMenu>
            <MenuItem icon={<HomeRoundedIcon />}>Dashboard</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
            <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
            <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
            <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
            <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </div>
  );
};

export default Dashboard;
