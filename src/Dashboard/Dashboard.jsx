import { useState } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../Components/CustomButton";
import CustomSideBar from "../Components/CustomSideBar/CustomSideBar";
import CountUp from "react-countup";
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

                <div className="stats_count">
                  <CountUp start={0} end={4354} duration={3} />
                </div>

                <div className="bottom_stats_count">
                  <span>
                    10%{" "}
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      fontSize={16}
                      style={{ paddingLeft: ".3rem" }}
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

                <div className="stats_count">
                  <CountUp start={0} end={6758} duration={3} />
                </div>

                <div className="bottom_stats_count">
                  <span>
                    10%{" "}
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      fontSize={16}
                      style={{ paddingLeft: ".3rem" }}
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

                <div className="stats_count">
                  <CountUp start={0} end={1245} duration={3} />
                </div>

                <div className="bottom_stats_count">
                  <span>
                    10%{" "}
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      fontSize={16}
                      style={{ paddingLeft: ".3rem" }}
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

                <div className="stats_count">
                  <CountUp start={0} end={457} duration={3} />
                </div>

                <div className="bottom_stats_count">
                  <span>
                    10%{" "}
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      fontSize={16}
                      style={{ paddingLeft: ".3rem" }}
                    />
                  </span>
                  +$150 today
                </div>
              </div>
            </div>

            <div className="kyc_status_main">
              <div className="kyc_status_container">
                <div className="kyc_status_container_table">
                  <table>
                    <thead>
                      <tr className="table_head_row">
                        <th>SL</th>
                        <th>Name</th>
                        <th> Date</th>
                        <th>Request ID</th>
                        <th>Documents</th>
                        <th>KYC Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Shivashankar Prasad</td>
                        <td>23/05/20</td>
                        <td>AF23048421</td>
                        <td>2/3</td>
                        <td className="icon-text-td">
                          <FontAwesomeIcon
                            icon={faCircle}
                            color="var(--global-red)"
                            fontSize={7}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          />
                          Incomplete
                        </td>
                        <td>View</td>
                      </tr>

                      <tr>
                        <td>2</td>
                        <td>Ravi Shankar Shukla</td>
                        <td>09/02/20</td>
                        <td>AF25142455</td>
                        <td>3/3</td>
                        <td className="icon-text-td">
                          <FontAwesomeIcon
                            icon={faCircle}
                            color="#2FE784"
                            fontSize={7}
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          />
                          Complete
                        </td>
                        <td>View</td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td>Akhandanand Triphali</td>
                        <td>23/10/20</td>
                        <td>AF27241245</td>
                        <td>3/3</td>
                        <td className="icon-text-td">
                          <FontAwesomeIcon
                            icon={faCircle}
                            color="#2FE784"
                            fontSize={7}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          />
                          Complete
                        </td>
                        <td>View</td>
                      </tr>

                      <tr>
                        <td>4</td>
                        <td>Balraj Sethi</td>
                        <td>07/04/20</td>
                        <td>AF23048421</td>
                        <td>1/3</td>
                        <td className="icon-text-td">
                          <FontAwesomeIcon
                            icon={faCircle}
                            color="var(--global-red)"
                            fontSize={7}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          />
                          Incomplete
                        </td>
                        <td>View</td>
                      </tr>

                      <tr>
                        <td>5</td>
                        <td>Guddu Pandit</td>
                        <td>23/05/20</td>
                        <td>AF23048421</td>
                        <td>3/3</td>
                        <td className="icon-text-td">
                          <FontAwesomeIcon
                            icon={faCircle}
                            color="#2FE784"
                            fontSize={7}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          />
                          Complete
                        </td>
                        <td>View</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="kyc_status_charts_container">
                <div className="kyc_status_charts_header">Charts</div>

                <div className="total_kyc_request_stats">
                    <div className="total_kyc_request_label">
                      Total KYC Request
                      <br></br>
                      <span><CountUp start={0} end={3000} duration={3} /></span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
