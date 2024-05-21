import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../Components/CustomButton";
import CustomSideBar from "../Components/CustomSideBar/CustomSideBar";
import CountUp from "react-countup";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Header from "../Components/Header/Header";
import { Link } from "react-router-dom";


ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "KYC Request Status",
        data: [84, 10, 25, 20],
        backgroundColor: ["#27BC64", "#EE3A3A", "#E9BD2F", "#ECEDEF"],
      },
    ],
  };

  const options = {};

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = "bolder 20px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(
        `${data.datasets[0].data[0]}%`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };

  return (
    <div className="dashboard_main_container">
      <Header />
      <div className="main_body_dashboard">
        <CustomSideBar />

        <div className="side_body_dashboard">
          <div className="body_header">
            <div className="body_heading_dashboard">
              <img
                src="/img/waving.png"
                className="heading_wave_img"
              />
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
                  <div style={{ display: "flex", width: "100%" }}>
                    {" "}
                    <img
                      src="/img/caution.png"
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
                    <CustomButton
                      backgroundColor="var(--global-purple)"
                      width={90}
                      fontSize={13}
                    >
                      Proceed
                    </CustomButton>
                    <div style={{ paddingLeft: "1rem" }}>
                      <CustomButton
                        backgroundColor="#fff"
                        color="#848484"
                        borderWidth="2px"
                        borderColor="#848484"
                        width={80}
                        fontSize={13}
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
                  <img
                    src="/img/download.png"
                    className="stats_img"
                  />
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
                  <img
                    src="/img/verified.png"
                    className="stats_img"
                  />
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
                  <img
                    src="/img/agents.png"
                    className="stats_img"
                  />
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
                  <img
                    src="/img/organization.png"
                    className="stats_img"
                  />
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
                        <td style={{ cursor: "pointer" }}>
                          <Link to="/Kyc" className="table_view_nav">
                            View
                          </Link>
                        </td>
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
                        <td>Ravishankar prasad</td>
                        <td>25/12/20</td>
                        <td>AF29048421</td>
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
                        <td>5</td>
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
                        <td>6</td>
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

                <div className="kyc_request_status">
                  <div className="kyc_request_status_heading">
                    <span>KYC Request Status</span>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div>

                  <div className="kyc_request_status_chart">
                    <Doughnut
                      data={data}
                      options={options}
                      plugins={[textCenter]}
                    />
                  </div>

                  <div className="kyc_request_status_chart_legends">
                    <div>
                      <FontAwesomeIcon
                        icon={faSquare}
                        color="#27BC64"
                        style={{ paddingRight: ".5rem" }}
                      />
                      Complete
                    </div>

                    <div>
                      <FontAwesomeIcon
                        icon={faSquare}
                        color="#EE3A3A"
                        style={{ paddingRight: ".5rem" }}
                      />
                      Incomplete
                    </div>

                    <div>
                      <FontAwesomeIcon
                        icon={faSquare}
                        color="#E9BD2F"
                        style={{ paddingRight: ".5rem" }}
                      />
                      Pending
                    </div>

                    <div>
                      <FontAwesomeIcon
                        icon={faSquare}
                        color="#ECEDEF"
                        style={{ paddingRight: ".5rem" }}
                      />
                      Others
                    </div>
                  </div>
                </div>
              </div>

              <div className="kyc_stats_main_container">
                <div className="kyc_stats_box">
                  <div className="kyc_stats_header">
                    <img
                      src="/img/thumbs-up.png"
                      className="kyc_stats_image"
                    />
                    <div className="kyc_stats_heading">
                      Total Approved Requests
                    </div>
                  </div>
                  <div className="kyc_stats_count">
                    <CountUp start={0} end={1200} duration={3} />
                  </div>
                </div>

                <div className="kyc_stats_box">
                  <div className="kyc_stats_header">
                    <img
                      src="/img/thumbs-down.png"
                      className="kyc_stats_image"
                    />
                    <div className="kyc_stats_heading">
                      Total Rejected Requests
                    </div>
                  </div>
                  <div className="kyc_stats_count">
                    <CountUp start={0} end={1200} duration={3} />
                  </div>
                </div>

                <div className="kyc_stats_box">
                  <div className="kyc_stats_header">
                    <img
                      src="/img/pending.png"
                      className="kyc_stats_image"
                    />
                    <div className="kyc_stats_heading">
                      Total Pending Requests
                    </div>
                  </div>
                  <div className="kyc_stats_count">
                    <CountUp start={0} end={1200} duration={3} />
                  </div>
                </div>

                <div className="kyc_stats_box">
                  <div className="kyc_stats_header">
                    <img
                      src="/img/stats.png"
                      className="kyc_stats_image"
                    />
                    <div className="kyc_stats_heading">Total Request</div>
                  </div>
                  <div className="kyc_stats_count">
                    <CountUp start={0} end={1200} duration={3} />
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
