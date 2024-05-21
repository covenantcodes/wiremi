import "./CustomerSupport.css";
import CustomSideBar from "../Components/CustomSideBar/CustomSideBar";
import Header from "../Components/Header/Header";
import { faChevronRight, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "react-circular-progressbar/dist/styles.css";
import CustomButton from "../Components/CustomButton";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";

const CustomerSupport = () => {
  const valueTicket = 121;
  const valueChat = 144;
  const valueTransfer = 12;
  const valueTask = 2;

  return (
    <div>
      <Header />

      <div className="main_customer_body">
        <div className="m_sidebar_container">
          <CustomSideBar />
        </div>
        <div className="customer_support_body">
          <div className="customer_support_body_title"> Dashboard</div>
          <div className="customer_support_stats_box">
            <div className="customer_support_stats">
              <div className="customer_support_stats_cta">
                Open Tickets
                <FontAwesomeIcon
                  fontSize={13}
                  style={{ marginLeft: "3px" }}
                  icon={faChevronRight}
                />
              </div>

              <div className="customer_support_stats_bottom">
                <div
                  style={{
                    width: 75,
                    height: 75,
                    paddingTop: "1rem",
                    color: "black",
                  }}
                >
                  <CircularProgressbar
                    value={valueTicket}
                    maxValue={360}
                    text={`${valueTicket}`}
                    styles={buildStyles({
                      // Colors
                      pathColor: "#6E8AE8",
                    })}
                  />
                </div>
                <div className="customer_support_stats_month">
                  <div className="current_month">
                    CURRENT MONTH
                    <div className="ticket_current_month">
                      {" "}
                      <FontAwesomeIcon
                        icon={faArrowTrendDown}
                        color="red"
                        style={{ marginRight: 4 }}
                      />{" "}
                      25 Less Tickets
                    </div>
                  </div>

                  <div className="current_month">
                    LAST MONTH
                    <div className="ticket_current_month"> 156 Tickets</div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>

            <div className="customer_support_stats">
              <div className="customer_support_stats_cta">
                Open Chats
                <FontAwesomeIcon
                  fontSize={13}
                  style={{ marginLeft: "3px" }}
                  icon={faChevronRight}
                />
              </div>

              <div className="customer_support_stats_bottom">
                <div
                  style={{
                    width: 75,
                    height: 75,
                    paddingTop: "1rem",
                    color: "black",
                  }}
                >
                  <CircularProgressbar
                    value={valueChat}
                    maxValue={360}
                    text={`${valueChat}`}
                    styles={buildStyles({
                      // Colors
                      pathColor: "#FF9D56",
                    })}
                  />
                </div>
                <div className="customer_support_stats_month">
                  <div className="current_month">
                    UNREAD
                    <div className="ticket_current_month"> 22</div>
                  </div>

                  <div className="current_month">
                    ANSWERED
                    <div className="ticket_current_month"> 122</div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>

            <div className="customer_support_stats">
              <div className="customer_support_stats_cta">
                Transfer Tickets
                <FontAwesomeIcon
                  fontSize={13}
                  style={{ marginLeft: "3px" }}
                  icon={faChevronRight}
                />
              </div>

              <div className="customer_support_stats_bottom">
                <div
                  style={{
                    width: 75,
                    height: 75,
                    paddingTop: "1rem",
                    color: "black",
                  }}
                >
                  <CircularProgressbar
                    value={valueTransfer}
                    maxValue={360}
                    text={`${valueTransfer}`}
                    styles={buildStyles({
                      // Colors
                      pathColor: "#1E87EA",
                    })}
                  />
                </div>
                <div className="customer_support_stats_month">
                  <div className="current_month">
                    CURRENT MONTH
                    <div className="ticket_current_month"> 3 More</div>
                  </div>

                  <div className="current_month">
                    LAST MONTH
                    <div className="ticket_current_month"> 9 Deals Closed</div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>

            <div className="customer_support_stats">
              <div className="customer_support_stats_cta">
                Open Tasks
                <FontAwesomeIcon
                  fontSize={13}
                  style={{ marginLeft: "3px" }}
                  icon={faChevronRight}
                />
              </div>

              <div className="customer_support_stats_bottom">
                <div
                  style={{
                    width: 75,
                    height: 75,
                    paddingTop: "1rem",
                    color: "black",
                  }}
                >
                  <CircularProgressbar
                    value={valueTask}
                    maxValue={360}
                    text={`${valueTask}`}
                    styles={buildStyles({
                      // Colors
                      pathColor: "#2FE784",
                    })}
                  />
                </div>
                <div className="customer_support_stats_month">
                  <div className="current_month">
                    RESPONSIBILITY
                    <div className="ticket_current_month"> 100%</div>
                  </div>

                  <div className="current_month">
                    DUE
                    <div className="ticket_current_month"> 123 Jan 2021</div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>

            <div className="customer_support_stats">
              <div className="customer_support_stats_cta">
                Open Tickets
                <FontAwesomeIcon
                  fontSize={13}
                  style={{ marginLeft: "3px" }}
                  icon={faChevronRight}
                />
              </div>

              <div className="customer_support_stats_bottom">
                <div
                  style={{
                    width: 75,
                    height: 75,
                    paddingTop: "1rem",
                    color: "black",
                  }}
                >
                  <CircularProgressbar
                    value={valueTicket}
                    maxValue={360}
                    text={`${valueTicket}`}
                    styles={buildStyles({
                      // Colors
                      pathColor: "#FD334D",
                    })}
                  />
                </div>
                <div className="customer_support_stats_month">
                  <div className="current_month">
                    CURRENT MONTH
                    <div className="ticket_current_month">
                      {" "}
                      <FontAwesomeIcon
                        icon={faArrowTrendDown}
                        color="red"
                        style={{ marginRight: 4 }}
                      />{" "}
                      25 Less Tickets
                    </div>
                  </div>

                  <div className="current_month">
                    LAST MONTH
                    <div className="ticket_current_month"> 146 Tickets</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="views_main_container">
            <div className="views_main_box">
              <div className="views_header_box">
                <div className="views_header_title">Views</div>
                <div className="views_header_icon">
                  <FontAwesomeIcon
                    icon={faPencil}
                    style={{ marginRight: "6px" }}
                  />
                  Edit Views
                </div>
              </div>

              <div className="views_actions_container_box">
                <div className="views_actions_container">
                  <div className="views_actions_box">
                    <div className="views_actions_icon">
                      <img src="../../../public/img/megaphone.png" />
                    </div>
                    Chat with teams
                  </div>
                </div>

                <div className="views_actions_container">
                  <div className="views_actions_box">
                    <div className="views_actions_icon">
                      <img src="../../../public/img/phone.png" />
                    </div>
                    Make a call
                  </div>
                </div>

                <div className="views_actions_container">
                  <div className="views_actions_box">
                    <div className="views_actions_icon">
                      <img src="../../../public/img/compose.png" />
                    </div>
                    Compose Email
                  </div>
                </div>

                <div className="views_actions_container">
                  <div className="views_actions_box">
                    <div className="views_actions_icon">
                      <img src="../../../public/img/compose.png" />
                    </div>
                    Compose Notification
                  </div>
                </div>

                <div className="views_actions_container">
                  <div className="views_actions_box">
                    <div className="views_actions_icon">
                      <img src="../../../public/img/task.png" />
                    </div>
                    Create a task
                  </div>
                </div>

                <div className="views_actions_container">
                  <div className="views_actions_box">
                    <div className="views_actions_icon">
                      <img src="../../../public/img/megaphone.png" />
                    </div>
                    Add Contact
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="chat_notification_main_container">
            <div className="notification_container">
              <div className="notification_header">
                <CustomButton
                  backgroundColor="var(--primary-color)"
                  width={90}
                  fontSize={13}
                >
                  Proceed
                </CustomButton>

                <div className="edit_icon_container">
                  <FontAwesomeIcon
                    icon={faPencil}
                    style={{ marginRight: "6px" }}
                  />
                  Mark all as Read
                </div>
              </div>

              <div className="notification_item_all_container">
                <div className="notification_item">
                  <div className="notification_badge">
                    <div className="notification_badge_icon">
                      <PhoneMissedIcon />
                    </div>
                  </div>
                  <div className="notification_item_main">
                    <div className="notification_item_body">
                      You missed a call from <span>James Olsen</span>
                    </div>
                    <div className="notification_item_sub">
                      a few seconds ago
                    </div>
                  </div>

                  <div className="notification_item_cta">
                    Go to Chat
                    <FontAwesomeIcon
                      style={{ marginLeft: "3px" }}
                      icon={faChevronRight}
                      color="#0379E7"
                    />
                  </div>
                </div>

                <div className="notification_item">
                  <div className="notification_badge">
                    <div className="notification_badge_icon img_version">
                      <img src="../../../public/img/not_badge.png" />
                    </div>
                  </div>
                  <div className="notification_item_main">
                    <div className="notification_item_body">
                      You missed a call from <span>James Olsen</span>
                    </div>
                    <div className="notification_item_sub">
                      a few seconds ago
                    </div>
                  </div>

                  <div className="notification_item_cta">
                    Go to Chat
                    <FontAwesomeIcon
                      style={{ marginLeft: "3px" }}
                      icon={faChevronRight}
                      color="#0379E7"
                    />
                  </div>
                </div>

                <div className="notification_item">
                  <div className="notification_badge">
                    <div className="notification_badge_icon">
                      <PhoneMissedIcon />
                    </div>
                  </div>
                  <div className="notification_item_main">
                    <div className="notification_item_body">
                      Jane Robert updated ticket status from Open to{" "}
                      <span>Resolved</span>
                    </div>
                    <div className="notification_item_sub">
                      a few seconds ago
                    </div>
                  </div>

                  <div className="notification_item_cta">
                    Go to Chat
                    <FontAwesomeIcon
                      style={{ marginLeft: "3px" }}
                      icon={faChevronRight}
                      color="#0379E7"
                    />
                  </div>
                </div>

                <div className="notification_item">
                  <div className="notification_badge">
                    <div className="notification_badge_icon img_version">
                      <img src="../../../public/img/jane.png" />
                    </div>
                  </div>
                  <div className="notification_item_main">
                    <div className="notification_item_body">
                      You missed a call from <span>Micheal Bay</span>
                    </div>
                    <div className="notification_item_sub">
                      a few seconds ago
                    </div>
                  </div>

                  <div className="notification_item_cta">
                    Go to Chat
                    <FontAwesomeIcon
                      style={{ marginLeft: "3px" }}
                      icon={faChevronRight}
                      color="#0379E7"
                    />
                  </div>
                </div>

                <div className="notification_item">
                  <div className="notification_badge">
                    <div className="notification_badge_icon">
                      <PhoneMissedIcon />
                    </div>
                  </div>
                  <div className="notification_item_main">
                    <div className="notification_item_body">
                      You missed a call from <span>James Olsen</span>
                    </div>
                    <div className="notification_item_sub">
                      a few seconds ago
                    </div>
                  </div>

                  <div className="notification_item_cta">
                    Go to Chat
                    <FontAwesomeIcon
                      style={{ marginLeft: "3px" }}
                      icon={faChevronRight}
                      color="#0379E7"
                    />
                  </div>
                </div>

                <div className="notification_item">
                  <div className="notification_badge">
                    <div className="notification_badge_icon">
                      <PhoneMissedIcon />
                    </div>
                  </div>
                  <div className="notification_item_main">
                    <div className="notification_item_body">
                      Your email campaign{" "}
                      <span>“Spirit sale - all sneakers 50% off” </span>has been
                      sent
                    </div>
                    <div className="notification_item_sub">
                      a few seconds ago
                    </div>
                  </div>

                  <div className="notification_item_cta">
                    Go to Chat
                    <FontAwesomeIcon
                      style={{ marginLeft: "3px" }}
                      icon={faChevronRight}
                      color="#0379E7"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="live_chat_main_container">
              <div className="live_chat_header_box">
                <CustomButton
                  backgroundColor="var(--primary-color)"
                  width={90}
                  fontSize={13}
                  icon={<FontAwesomeIcon icon={faEnvelope} />}
                >
                  Live Chat
                </CustomButton>
              </div>

              <div className="live_chat_box">
                <div className="live_chat_header">
                  <div className="live_chat_header_title">Chat</div>
                  <div className="live_chat_header_actions">
                    <FontAwesomeIcon icon={faRotate} />
                    <FontAwesomeIcon icon={faMinus} />
                    <FontAwesomeIcon icon={faXmark} />
                  </div>
                </div>

                <div className="live_chat_body">
                  <div className="received_chat">
                    <div className="live_chat_side">
                      <div className="live_chat_profile">
                        <img src="../../../public/img/jane.png" />
                      </div>
                      <div className="live_chat_time">10:01</div>
                    </div>
                    <div className="received_chat_bubble">
                      <div className="received_chat_name">Geneva</div>

                      <div className="received_chat_message">Hello Thomas</div>
                    </div>
                  </div>

                  <div className="main_message_box">
                    <div className="sent_chat">
                      <div className="live_chat_side">
                        <div className="live_chat_profile sent_img">
                          <img src="../../../public/img/jane.png" />
                        </div>
                        <div className="live_chat_time">10:04</div>
                      </div>
                      <div className="received_chat_bubble sent_bubble">
                        <div className="received_chat_name">Thomas</div>

                        <div className="received_chat_message">
                          Hello Geneva, How are you today?
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="received_chat">
                    <div className="live_chat_side">
                      <div className="live_chat_profile">
                        <img src="../../../public/img/jane.png" />
                      </div>
                      <div className="live_chat_time">10:01</div>
                    </div>
                    <div className="received_chat_bubble">
                      <div className="received_chat_name">Geneva</div>

                      <div className="received_chat_message">
                        Im okay what about you
                      </div>
                    </div>
                  </div>

                  <div className="main_message_box">
                    <div className="sent_chat">
                      <div className="live_chat_side">
                        <div className="live_chat_profile sent_img">
                          <img src="../../../public/img/jane.png" />
                        </div>
                        <div className="live_chat_time">10:04</div>
                      </div>
                      <div className="received_chat_bubble sent_bubble">
                        <div className="received_chat_name">Thomas</div>

                        <div className="received_chat_message">
                          I am stressed tbh
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="live_chat_input_container">
                    <input
                      placeholder="Type a message"
                      className="live_chat_input"
                    />

                    <CustomButton
                      width={40}
                      fontSize={12}
                      backgroundColor={"#CF3438"}
                    >
                      Send
                    </CustomButton>
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

export default CustomerSupport;
