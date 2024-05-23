import "./Compliance.css";
import Header from "../Components/Header/Header";
import CustomSideBar from "../Components/CustomSideBar/CustomSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faStar,
  faMessage,
  faCheck,
  faXmark,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../Components/CustomButton";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 200 },
  { name: "Group C", value: 200 },
];
const COLORS = ["#7D0E5B", "#F80E6D", "#01A7A7"];

const RADIAN = Math.PI / 180;
const semidata = [
  { name: "A", value: 40, color: "#00CD32" },
  { name: "B", value: 45, color: "#99CC33" },
  { name: "C", value: 25, color: "#FECC31" },
  { name: "D", value: 20, color: "#FF6600" },
  { name: "E", value: 20, color: "#FE0000" },
];
const cx = 380;
const cy = 150;
const iR = 50;
const oR = 100;
const value = 50;

const needle = (value, semidata, cx, cy, iR, oR, color) => {
    let total = 0;
    semidata.forEach((v) => {
      total += v.value;
    });
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;
  
    return [
      <circle key="needle-circle" cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
      <path key="needle-path" d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="none" fill={color} />,
    ];
  };
  
const Compliance = () => {
  return (
    <div>
      <Header />

      <div className="main_compliance_body">
        <div className="compliance_sidebar_container">
          <CustomSideBar />
        </div>
        <div className="compliance_body">
          <div className="compliance_sub_body">
            <div className="compliance_first_body">
              <div className="compliance_info_body">
                <div className="compliance_info_box">
                  <div className="compliance_info_pic">
                    <img src="/img/profilepic.png" />
                  </div>

                  <div className="compliance_info_contents">
                    <div>
                      {" "}
                      <div className="compliance_info_header">
                        <div className="kyc_name_text">Brie Larson</div>
                        <div className="kyc_address_text">
                          <div className="kyc_address_icon">
                            <div style={{ paddingRight: "10px" }}>
                              {" "}
                              <FontAwesomeIcon
                                icon={faLocationPin}
                                color="#583AD2"
                              />
                            </div>
                            New York, New York
                          </div>
                        </div>
                      </div>
                      <div className="kyc_account_type_container">
                        <div className="kyc_account_type_title">
                          Starter/Premium
                        </div>
                        <div className="kyc_account_type_text">
                          Active Account
                        </div>
                      </div>
                      <div className="compliance_processing_container">
                        <div className="processing_left_box">
                          <div className="processing_header_container">
                            KYC
                            <div className="processing_status_text">
                              Processing
                            </div>
                          </div>

                          <div className="rating_container">
                            8.9
                            <div className="rating_container_stars">
                              <FontAwesomeIcon
                                icon={faStar}
                                fontSize={13}
                                color="#105CE2"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                fontSize={13}
                                color="#105CE2"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                fontSize={13}
                                color="#105CE2"
                              />

                              <FontAwesomeIcon
                                icon={faStar}
                                fontSize={13}
                                color="#105CE2"
                              />
                              <FontAwesomeIcon
                                icon={faStar}
                                fontSize={13}
                                color="#105CE2"
                              />
                            </div>
                          </div>

                          <div className="message_button_container">
                            <CustomButton
                              backgroundColor={"var(--primary-color)"}
                              borderRadius={10}
                              width={130}
                              icon={<FontAwesomeIcon icon={faMessage} />}
                            >
                              Message
                            </CustomButton>
                          </div>
                        </div>

                        <div className="compliance_processing_right_box">
                          <div className="compliance_processing_right_item">
                            ID Card Front
                            <CustomButton
                              width={50}
                              fontSize={".8rem"}
                              backgroundColor={"var(--primary-color)"}
                            >
                              Download
                            </CustomButton>
                          </div>

                          <div className="compliance_processing_right_item">
                            ID Card Back
                            <CustomButton
                              width={50}
                              fontSize={".8rem"}
                              backgroundColor={"var(--primary-color)"}
                            >
                              Download
                            </CustomButton>
                          </div>

                          <div className="compliance_processing_right_item">
                            Utility Bill
                            <CustomButton
                              width={50}
                              fontSize={".8rem"}
                              backgroundColor={"var(--primary-color)"}
                            >
                              Download
                            </CustomButton>
                          </div>
                        </div>
                      </div>
                      <div className="account_info_container">
                        <div className="account_info_text">CONTACT INFO</div>

                        <div className="account_info_item">
                          <div
                            style={{ width: "30%", border: "1px solid red" }}
                          >
                            Phone:{" "}
                          </div>{" "}
                          <span>+4465783233</span>
                        </div>
                        <div className="account_info_item">
                          <div
                            style={{ width: "30%", border: "1px solid red" }}
                          >
                            Address:{" "}
                          </div>
                          <span>123,Rajar Goli, South Mugda</span>
                        </div>
                        <div className="account_info_item">
                          <div
                            style={{ width: "30%", border: "1px solid red" }}
                          >
                            Email:{" "}
                          </div>{" "}
                          <span>hello@adminboard.com</span>
                        </div>
                        <div className="account_info_item">
                          <div
                            style={{ width: "30%", border: "1px solid red" }}
                          >
                            Website:{" "}
                          </div>
                          <span>+www.adminboard.com</span>
                        </div>
                        <div className="account_info_item">
                          <div
                            style={{ width: "30%", border: "1px solid red" }}
                          >
                            Skype:{" "}
                          </div>
                          <span>Admin Board</span>
                        </div>
                      </div>
                      <div className="account_info_container">
                        <div className="account_info_text">
                          BASIC INFORMATION
                        </div>

                        <div className="account_info_item">
                          <div
                            style={{ width: "30%", border: "1px solid red" }}
                          >
                            Birthday:{" "}
                          </div>{" "}
                          <span>January 31, 1960</span>2{" "}
                        </div>
                        <div className="account_info_item">
                          <div
                            style={{ width: "30%", border: "1px solid red" }}
                          >
                            Gender:{" "}
                          </div>{" "}
                          <span>Male</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="compliance_info_body two">
                <div className="compliance_info_body_header">
                  Escrow Rating
                  <span>Number of Transactions: 500</span>
                </div>

                <div className="compliance_info_body_item">
                  <div className="compliance_info_body_item_left">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="compliance_info_body_item_pic">
                        <img src="/img/man.png" />
                      </div>
                    </div>

                    <div className="compliance_info_body_item_action">
                      <div className="compliance_info_body_item_name">
                        Brie Larson
                      </div>
                      <div>
                        <div className="compliance_info_body_actions_box">
                          <CustomButton
                            width={60}
                            fontSize={12}
                            backgroundColor={"#24AC40"}
                          >
                            Approve
                          </CustomButton>
                          <FontAwesomeIcon
                            icon={faCheck}
                            color={"#2FE784"}
                            style={{ paddingLeft: "8px" }}
                          />
                          <FontAwesomeIcon
                            icon={faXmark}
                            color={"#FF0000"}
                            style={{ paddingLeft: "8px" }}
                          />
                          <FontAwesomeIcon
                            icon={faShare}
                            color={"#3355FF"}
                            style={{ paddingLeft: "8px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>October 21, 2017</div>
                </div>

                <div className="compliance_info_body_item">
                  <div className="compliance_info_body_item_left">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="compliance_info_body_item_pic">
                        <img src="/img/man.png" />
                      </div>
                    </div>

                    <div className="compliance_info_body_item_action">
                      <div className="compliance_info_body_item_name">
                        Brie Larson
                      </div>
                      <div>
                        <div className="compliance_info_body_actions_box">
                          <CustomButton
                            width={60}
                            fontSize={12}
                            backgroundColor={"#EBB33D"}
                          >
                            Pending
                          </CustomButton>
                          <FontAwesomeIcon
                            icon={faCheck}
                            color={"#2FE784"}
                            style={{ paddingLeft: "8px" }}
                          />
                          <FontAwesomeIcon
                            icon={faXmark}
                            color={"#FF0000"}
                            style={{ paddingLeft: "8px" }}
                          />
                          <FontAwesomeIcon
                            icon={faShare}
                            color={"#3355FF"}
                            style={{ paddingLeft: "8px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>October 21, 2017</div>
                </div>

                <div className="compliance_info_body_item">
                  <div className="compliance_info_body_item_left">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div className="compliance_info_body_item_pic">
                        <img src="/img/man.png" />
                      </div>
                    </div>

                    <div className="compliance_info_body_item_action">
                      <div className="compliance_info_body_item_name">
                        Brie Larson
                      </div>
                      <div>
                        <div className="compliance_info_body_actions_box">
                          <CustomButton
                            width={60}
                            fontSize={12}
                            backgroundColor={"#DC3445"}
                          >
                            Rejected
                          </CustomButton>
                          <FontAwesomeIcon
                            icon={faCheck}
                            color={"#2FE784"}
                            style={{ paddingLeft: "8px" }}
                          />
                          <FontAwesomeIcon
                            icon={faXmark}
                            color={"#FF0000"}
                            style={{ paddingLeft: "8px" }}
                          />
                          <FontAwesomeIcon
                            icon={faShare}
                            color={"#3355FF"}
                            style={{ paddingLeft: "8px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>October 21, 2017</div>
                </div>
              </div>
            </div>

            <div className="compliance_second_body">
              <div className="compliance_second_balance_box">
                <div className="compliance_second_balance_title">
                  Total Balance
                </div>
                <div className="piechart_container">
                  <PieChart width={800} height={200}>
                    <Pie
                      data={data}
                      cx={120}
                      cy={100}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={6}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>

                    <Pie
                      dataKey="value"
                      startAngle={180}
                      endAngle={0}
                      data={semidata}
                      cx={cx}
                      cy={cy}
                      innerRadius={iR}
                      outerRadius={oR}
                      fill="#8884d8"
                      stroke="none"
                    >
                      {semidata.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    {needle(value, semidata, cx, cy, iR, oR, "#d0d000")}
                  </PieChart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
