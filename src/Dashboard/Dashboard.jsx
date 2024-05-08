import { useState } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../Components/CustomButton";
import CustomSideBar from "../Components/CustomSideBar/CustomSideBar";

import { useProSidebar } from "react-pro-sidebar";

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
      <div className="main_body_dashboard">
        <CustomSideBar />

        <div className="side_body_dashboard">
          <div className="body_header">
            <div className="body_heading_dashboard">
              <img src="../../img/waving.png" className="heading_wave_img" />
              <div className="body_heading_text">
                Welcome, Brie Larson
                <div className="body_subheading_text">
                  Welcome to the Admin Dashboard, Lets make day super productive
                </div>
              </div>
            </div>

            <div className="dashboard_warning_container">
              <div className="dashboard_warning_box">
                <div className="dashboard_warning_info_container">
                  <div style={{ display: "flex" }}>
                    {" "}
                    <img
                      src="../../img/caution.png"
                      className="dashboard_warning_image"
                    />
                    <div className="dashboard_warning_text">
                      <div className="dashboard_warning_text_header">
                        Attention
                      </div>
                      <div className="dashboard_warning_text_body">
                        KYC Approval Pending For 20 Users.
                      </div>
                    </div>
                  </div>

                  <div className="dashboard_warning_info_actions">
                    <CustomButton backgroundColor="var(--global-purple)">
                      Proceed
                    </CustomButton>
                    <div style={{ paddingLeft: "1rem" }}>
                      <CustomButton
                        backgroundColor="#fff"
                        color="#848484"
                        borderWidth="2px"
                        borderColor="#848484"
                      >
                        Cancel
                      </CustomButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="stats_container">
              <div className="stats_box">
                <div className="stats_header">
                  Total Downloads
                  <img src="../../img/download.png" className="stats_img" />
                </div>

                <div className="stats_count">6784</div>

                <div className="bottom_stats_count">
                  <span>
                    10%{" "}
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      fontSize={16}
                      style={{paddingLeft: ".3rem"}}
                    />
                  </span>
                  +30 today
                </div>
              </div>

                 <div className="stats_box">
                <div className="stats_header">
                  Total Verified Users
                  <img src="../../img/verified.png" className="stats_img" />
                </div>

                <div className="stats_count">6784</div>

                <div className="bottom_stats_count">
                  <span>
                    10%{" "}
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      fontSize={16}
                      style={{paddingLeft: ".3rem"}}
                    />
                  </span>
                  +100 today
                </div>
              </div>

                 <div className="stats_box">
                <div className="stats_header">
                  Total Agents
                  <img src="../../img/agents.png" className="stats_img" />
                </div>

                <div className="stats_count">6784</div>

                <div className="bottom_stats_count">
                  <span>
                    10%{" "}
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      fontSize={16}
                      style={{paddingLeft: ".3rem"}}
                    />
                  </span>
                 +$150 today
                </div>
              </div>

                 <div className="stats_box">
                <div className="stats_header">
                  Total Organization
                  <img src="../../img/organization.png" className="stats_img" />
                </div>

                <div className="stats_count">6784</div>

                <div className="bottom_stats_count">
                  <span>
                    10%{" "}
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      fontSize={16}
                      style={{paddingLeft: ".3rem"}}
                    />
                  </span>
                  +$150 today
                </div>
              </div>
            </div>

            <div className="kyc_status_container">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
