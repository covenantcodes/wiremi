import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomButton from "../CustomButton";
import "./Header.css"
import { useProSidebar } from "react-pro-sidebar";

const Header = () => {
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
    <div className="header_container">
    <div className="logo_container">
      <img src="../../src/assets/img/logo.png" />

      <span>Wiremi</span>
    </div>

    <div className="header_actions_container">
      <div className="side_bar_menu_icon" onClick={handleToggleSidebar}>
        <FontAwesomeIcon
          icon={faBars}
          fontSize={20}
          color="var(--global-grey)"
        />
      </div>

      <div className="actions_container">
        <CustomButton
          backgroundColor="var(--primary-color)"
          width={170}
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
          <img src="../../src/assets/img/notification.png" />
          <img src="../../src/assets/img/email.png" />
        </div>

        <div className="profile_header_container">
          <div className="profile_pic_container">
            <img
              src="../../src/assets/img/profile.png"
              className="profile_pic"
            />
          </div>

          <div className="profile_name">
            Larson
            <div className="dropdown_container">
              <FontAwesomeIcon
                icon={faChevronDown}
                color="var(--global-grey)"
                fontSize={12}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header