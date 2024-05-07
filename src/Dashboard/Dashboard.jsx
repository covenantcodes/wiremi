import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import CustomButton from "../Components/CustomButton";
const Dashboard = () => {
  return (
    <div className="dashboard_main_container">
      <div className="header_container">
        <div className="logo_container">
          <img src="../../img/logo.png" />

          <span>Wiremi</span>
        </div>

        <div className="header_actions_container">
          <div className="side_bar_menu_icon">
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
              <FontAwesomeIcon icon={faEnvelope} fontSize={29} color="#898989" />
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
    </div>
  );
};

export default Dashboard;
