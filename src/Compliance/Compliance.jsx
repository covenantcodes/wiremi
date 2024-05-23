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
  faEnvelope,
  faRotate,
  faMinus
} from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../Components/CustomButton";
import {
  PieChart,
  Pie,
  Cell,
  Label,
  Text,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Cards", value: 200 },
  { name: "Stocks", value: 200 },
  { name: "Savings", value: 300 },
];

const COLORS = ["#7D0E5B", "#F80E6D", "#01A7A7"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, index }) => {
  const radius = outerRadius + 20;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <Text
      x={x}
      y={y}
      fill="#01A7A7"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {data[index].name}
    </Text>
  );
};

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
    <circle
      key="needle-circle"
      cx={x0}
      cy={y0}
      r={r}
      fill={color}
      stroke="none"
    />,
    <path
      key="needle-path"
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="none"
      fill={color}
    />,
  ];
};

const bardata = [
  {
    name: "2011 Q1",
    ProductA: 44,
    ProductB: 13,
    ProductC: 11,
  },
  {
    name: "2011 Q2",
    ProductA: 55,
    ProductB: 23,
    ProductC: 17,
  },
  {
    name: "2011 Q3",
    ProductA: 41,
    ProductB: 20,
    ProductC: 15,
  },
  {
    name: "2011 Q4",
    ProductA: 67,
    ProductB: 8,
    ProductC: 15,
  },
  {
    name: "2012 Q1",
    ProductA: 22,
    ProductB: 13,
    ProductC: 21,
  },
  {
    name: "2012 Q2",
    ProductA: 47,
    ProductB: 27,
    ProductC: 14,
  },
  {
    name: "2012 Q3",
    ProductA: 33,
    ProductB: 15,
    ProductC: 15,
  },
  {
    name: "2012 Q4",
    ProductA: 49,
    ProductB: 12,
    ProductC: 13,
  },
];

const Compliance = () => {
  const transactions = [
    {
      name: "Kolor Tea Shirt For Men",
      status: "ONGOING",
      date: "January 22",
      price: "$21.56",
    },
    {
      name: "Kolor Tea Shirt For Women",
      status: "COMPLETED",
      date: "January 30",
      price: "$55.32",
    },
    {
      name: "Blue Backpack For Baby",
      status: "REJECTED",
      date: "January 25",
      price: "$14.85",
    },
    {
      name: "Kolor Tea Shirt For Men",
      status: "ONGOING",
      date: "January 22",
      price: "$21.56",
    },
    {
      name: "Kolor Tea Shirt For Women",
      status: "COMPLETED",
      date: "January 30",
      price: "$55.32",
    },
    {
      name: "Blue Backpack For Baby",
      status: "REJECTED",
      date: "January 25",
      price: "$14.85",
    },
  ];

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
                    <img src="/img/profilepic.png" alt="Profile" />
                  </div>
                  <div className="compliance_info_contents">
                    <div>
                      <div className="compliance_info_header">
                        <div className="kyc_name_text">Brie Larson</div>
                        <div className="kyc_address_text">
                          <div className="kyc_address_icon">
                            <div style={{ paddingRight: "10px" }}>
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
                              {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon
                                  key={i}
                                  icon={faStar}
                                  fontSize={13}
                                  color="#105CE2"
                                />
                              ))}
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
                          {[
                            "ID Card Front",
                            "ID Card Back",
                            "Utility Bill",
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="compliance_processing_right_item"
                            >
                              {item}
                              <CustomButton
                                width={50}
                                fontSize={".8rem"}
                                backgroundColor={"var(--primary-color)"}
                              >
                                Download
                              </CustomButton>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="account_info_container">
                        <div className="account_info_text">CONTACT INFO</div>
                        {[
                          { label: "Phone", value: "+4465783233" },
                          {
                            label: "Address",
                            value: "123, Rajar Goli, South Mugda",
                          },
                          { label: "Email", value: "hello@adminboard.com" },
                          { label: "Website", value: "www.adminboard.com" },
                          { label: "Skype", value: "Admin Board" },
                        ].map((info, index) => (
                          <div key={index} className="account_info_item">
                            <div style={{ width: "30%" }}>{info.label}: </div>
                            <span>{info.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="account_info_container">
                        <div className="account_info_text">
                          BASIC INFORMATION
                        </div>
                        {[
                          { label: "Birthday", value: "January 31, 1960" },
                          { label: "Gender", value: "Male" },
                        ].map((info, index) => (
                          <div key={index} className="account_info_item">
                            <div style={{ width: "30%" }}>{info.label}: </div>
                            <span>{info.value}</span>
                          </div>
                        ))}
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
                {["Approve", "Pending", "Rejected"].map((status, index) => (
                  <div key={index} className="compliance_info_body_item">
                    <div className="compliance_info_body_item_left">
                      <div className="compliance_info_body_item_pic">
                        <img src="/img/man.png" alt="Man" />
                      </div>
                      <div className="compliance_info_body_item_action">
                        <div className="compliance_info_body_item_name">
                          Brie Larson
                        </div>
                        <div>
                          <div className="compliance_info_body_actions_box">
                            <CustomButton
                              width={35}
                              padding={12}
                              fontSize={12}
                              backgroundColor={
                                status === "Approve"
                                  ? "#24AC40"
                                  : status === "Pending"
                                  ? "#EBB33D"
                                  : "#DC3445"
                              }
                            >
                              {status}
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
                ))}
              </div>
            </div>

            <div className="compliance_second_body">
              <div className="compliance_second_balance_box">
                <div className="compliance_second_balance_title">
                  Total Balance
                </div>
                <div className="piechart_container">
                  <PieChart width={500} height={240}>
                    <Pie
                      data={data}
                      cx={150}
                      cy={100}
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={6}
                      dataKey="value"
                      labelLine={false}
                      label={renderCustomizedLabel}
                    >
                      <Label
                        value="$700,000"
                        position="center"
                        style={{ color: "#01A7A7" }}
                      />
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
                      {/* <Label value="CREDIT SCORE RANGE" position="centerBottom" className="credit-score-label" /> */}
                    </Pie>
                    {needle(value, semidata, cx, cy, iR, oR, "#d0d000")}
                  </PieChart>
                </div>
              </div>

              <div className="compliance_second_transaction_history">
                <div className="transaction_history_header">
                  Transaction History
                </div>
                <div className="transaction_history_container">
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.map((transaction, index) => (
                        <tr key={index}>
                          <td>{transaction.name}</td>
                          <td>
                            <CustomButton
                              width={60}
                              padding={10}
                              backgroundColor={
                                transaction.status === "ONGOING"
                                  ? "#007BFF"
                                  : transaction.status === "COMPLETED"
                                  ? "#28A745"
                                  : "#DC3545"
                              }
                              color="#fff"
                              fontSize={12}
                            >
                              {transaction.status}
                            </CustomButton>
                          </td>
                          <td>{transaction.date}</td>
                          <td>{transaction.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="compliance_expenditure_container">
            <div className="compliance_expenditure_container_header">
              Total Expenditure
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                width={500}
                height={300}
                data={bardata}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="ProductC" stackId="a" fill="#38B0D2" />
                <Bar dataKey="ProductB" stackId="a" fill="#FEBB01" />
                <Bar dataKey="ProductA" stackId="a" fill="#E2E9EF" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="compliance_chat_container">
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
                        <img src="..//img/jane.png" />
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
                          <img src="..//img/jane.png" />
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
                        <img src="..//img/jane.png" />
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
                          <img src="..//img/jane.png" />
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

            <div className="live_chat_main_container">
              <div className="live_chat_header_box">
                <CustomButton
                  backgroundColor="var(--primary-color)"
                  width={90}
                  fontSize={13}
                  icon={<FontAwesomeIcon icon={faEnvelope} />}
                >
               Notifications
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
                        <img src="..//img/jane.png" />
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
                          <img src="..//img/jane.png" />
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
                        <img src="..//img/jane.png" />
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
                          <img src="..//img/jane.png" />
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

export default Compliance;
