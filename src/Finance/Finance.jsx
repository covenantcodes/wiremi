import "./Finance.css";
import Header from "../Components/Header/Header";
import CustomSideBar from "../Components/CustomSideBar/CustomSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faBars,
  faCartShopping,
  faChevronDown,
  faChevronUp,
  faEllipsis,
  faGear,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Kyc = () => {
  const valueTicket = 58;
  const transactionTicket = 130;
  const liquidityValue = 130;
  return (
    <div>
      <Header />
      <div className="main_finance_body">
        <div className="m_sidebar_container">
          <CustomSideBar />
        </div>

        <div className="finance_body">
          <div className="finance_top_stats">
            <div className="finance_top_stats_card">
              <div className="finance_top_stats_card_header">
                9526
                <FontAwesomeIcon icon={faCartShopping} fontSize={19} />
              </div>
              <div className="finance_line_progress">
                <div className="finance_line_progress_indicator_blue"></div>
                <div className="finance_line_progress_bar_gray"></div>
              </div>

              <div className="finance_top_stats_card_footer">
                Total Customer
                <div className="finance_top_stats_card_footer_value">+5%</div>
              </div>
            </div>

            <div className="finance_top_stats_card">
              <div className="finance_top_stats_card_header green_text">
                $8323
                <FontAwesomeIcon icon={faCartShopping} fontSize={19} />
              </div>
              <div className="finance_line_progress">
                <div className="finance_line_progress_indicator_blue green"></div>
                <div className="finance_line_progress_bar_gray"></div>
              </div>

              <div className="finance_top_stats_card_footer">
                Total Leeds
                <div className="finance_top_stats_card_footer_value">+1.2%</div>
              </div>
            </div>

            <div className="finance_top_stats_card">
              <div className="finance_top_stats_card_header tomato_text">
                6200
                <FontAwesomeIcon icon={faCartShopping} fontSize={19} />
              </div>
              <div className="finance_line_progress">
                <div className="finance_line_progress_indicator_blue tomato"></div>
                <div className="finance_line_progress_bar_gray"></div>
              </div>

              <div className="finance_top_stats_card_footer">
                Active Users
                <div className="finance_top_stats_card_footer_value">+1.2%</div>
              </div>
            </div>

            <div className="finance_top_stats_card">
              <div className="finance_top_stats_card_header yellow_text">
                5630
                <FontAwesomeIcon icon={faCartShopping} fontSize={19} />
              </div>
              <div className="finance_line_progress">
                <div className="finance_line_progress_indicator_blue yellow"></div>
                <div className="finance_line_progress_bar_gray"></div>
              </div>

              <div className="finance_top_stats_card_footer">
                Inactive Users
                <div className="finance_top_stats_card_footer_value">+2.2%</div>
              </div>
            </div>
          </div>

          <div className="finance_middle_stats">
            <div className="finance_middle_stats_card">
              <div className="finance_middle_stats_card_header">
                <div className="finance_middle_stats_card_header_title">
                  Total Revenue
                </div>
                <div className="finance_middle_stats_card_header_value">
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    color="#00CC61"
                    fontSize={15}
                    style={{ marginRight: "0.5rem" }}
                  />
                  234%
                </div>
              </div>

              <div className="finance_middle_stats_svg">
                <div
                  style={{
                    width: 45,
                    height: 45,
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
              </div>
            </div>

            <div className="finance_middle_stats_card red_bg">
              <div className="finance_middle_stats_card_header">
                <div className="finance_middle_stats_card_header_title">
                  Transaction Volume
                </div>
                <div className="finance_middle_stats_card_header_value">
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    color="#FD334D"
                    fontSize={15}
                    style={{ marginRight: "0.5rem" }}
                  />
                  234%
                </div>
              </div>

              <div className="finance_middle_stats_svg">
                <div
                  style={{
                    width: 45,
                    height: 45,
                    paddingTop: "1rem",
                    color: "black",
                  }}
                >
                  <CircularProgressbar
                    value={valueTicket}
                    maxValue={120}
                    text={`${transactionTicket}`}
                    styles={buildStyles({
                      // Colors
                      pathColor: "#FD334D",
                    })}
                  />
                </div>
              </div>
            </div>

            <div className="finance_middle_stats_card yellow_bg">
              <div className="finance_middle_stats_card_header">
                <div className="finance_middle_stats_card_header_title">
                  Average Transaction Volume
                </div>
                <div className="finance_middle_stats_card_header_value">
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    color="#FFCC00"
                    fontSize={15}
                    style={{ marginRight: "0.5rem" }}
                  />
                  145M
                </div>
              </div>

              <div className="finance_middle_stats_svg">
                <div
                  style={{
                    width: 45,
                    height: 45,
                    paddingTop: "1rem",
                    color: "black",
                  }}
                >
                  <CircularProgressbar
                    value={valueTicket}
                    maxValue={300}
                    text={`${valueTicket}`}
                    styles={buildStyles({
                      // Colors
                      pathColor: "#FFCC00",
                    })}
                  />
                </div>
              </div>
            </div>

            <div className="finance_middle_stats_card green_bg">
              <div className="finance_middle_stats_card_header">
                <div className="finance_middle_stats_card_header_title">
                  Pending Transaction
                </div>
                <div className="finance_middle_stats_card_header_value">
                  <FontAwesomeIcon
                    icon={faPlus}
                    color="#00CC61"
                    fontSize={15}
                    style={{ marginRight: "0.5rem" }}
                  />
                  234 hires
                </div>
              </div>

              <div className="finance_middle_stats_svg">
                <div
                  style={{
                    width: 45,
                    height: 45,
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
                      pathColor: "#00CC61",
                    })}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="finance_bottom_stats">
            <div className="finance_bottom_stats_card">
              <div className="finance_bottom_stats_card_header">Income</div>
              <div className="finance_bottom_stats_card_value">
                <div className="finance_bottom_stats_card_value_title">
                  <span>$</span>5,456
                </div>
                <div className="finance_bottom_stats_card_value_amount">
                  +14%
                </div>
              </div>
            </div>

            <div className="finance_bottom_stats_card">
              <div className="finance_bottom_stats_card_header">Expenses</div>
              <div className="finance_bottom_stats_card_value red_card">
                <div className="finance_bottom_stats_card_value_title">
                  <span>$</span>4,764
                </div>
                <div className="finance_bottom_stats_card_value_amount red_card_amount">
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    color="#fd334d"
                    style={{ marginRight: "0.3rem" }}
                    fontSize={12}
                  />
                  14%
                </div>
              </div>
            </div>

            <div className="finance_bottom_stats_card">
              <div className="finance_bottom_stats_card_header">
                Block Saving Funds
              </div>
              <div className="finance_bottom_stats_card_value">
                <div className="finance_bottom_stats_card_value_title">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    color="#00CC61"
                    style={{ marginRight: "0.3rem" }}
                    fontSize={15}
                  />
                  <span>$</span>1.5 M
                </div>
                <div className="finance_bottom_stats_card_value_amount">
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    color="#00CC61"
                    style={{ marginRight: "0.3rem" }}
                    fontSize={12}
                  />
                  15%
                </div>
              </div>
            </div>

            <div className="finance_bottom_stats_card">
              <div className="finance_bottom_stats_card_header">
                Debt <FontAwesomeIcon icon={faGear} />
              </div>
              <div className="finance_bottom_stats_card_value">
                <div className="finance_bottom_stats_card_value_title">
                  <span>$</span>31,564
                </div>
                <div className="finance_bottom_stats_card_value_amount yellow_card_amount">
                  +76%
                </div>
              </div>
            </div>
          </div>

          <div className="finance_rr_container">
            <div className="finance_revenue_card">
              <div className="finance_revenue_card_header">
                Revenue by products
              </div>

              <div className="finance_revenue_card_container">
                <div className="finance_revenue_card_box">
                  <div className="finance_revenue_card_box_header">
                    <div className="finance_revenue_card_box_header_title">
                      Transactions
                    </div>
                    <div className="finance_revenue_card_box_header_value">
                      Monthly Goals
                    </div>
                  </div>
                  <div className="finance_revenue_card_box_stats">
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      color="#fff"
                      fontSize={11}
                      style={{ marginRight: "0.2rem" }}
                    />
                    175.5%
                  </div>
                  <div className="finance_revenue_card_box_footer">
                    <span>$</span> 1283
                  </div>
                </div>

                <div className="finance_revenue_card_box light_blue_card">
                  <div className="finance_revenue_card_box_header">
                    <div className="finance_revenue_card_box_header_title">
                      Remittance
                    </div>
                    <div className="finance_revenue_card_box_header_value">
                      <FontAwesomeIcon
                        icon={faEllipsis}
                        fontSize={11}
                        color="#fff"
                      />
                    </div>
                  </div>
                  <div className="finance_revenue_card_box_stats">
                    175.5%
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      color="#fff"
                      fontSize={11}
                      style={{ marginLeft: "0.3rem" }}
                    />
                  </div>
                  <div className="finance_revenue_card_box_footer">363</div>
                </div>

                <div className="finance_revenue_card_box black_card_box">
                  <div className="finance_revenue_card_box_header">
                    <div className="finance_revenue_card_box_header_title">
                      Domestic Transaction
                    </div>
                    <div className="finance_revenue_card_box_header_value">
                      <span>Returning</span>
                    </div>
                  </div>
                  <div className="finance_revenue_card_box_stats">
                    <span>45</span>
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      color="#FFCC00"
                      fontSize={11}
                      style={{ marginLeft: "0.2rem" }}
                    />
                  </div>
                  <div className="finance_revenue_card_box_footer">87%</div>
                </div>
              </div>

              <div className="finance_revenue_card_container">
                <div className="finance_revenue_card_box savings_card">
                  <div className="finance_revenue_card_box_header">
                    <div className="finance_revenue_card_box_header_title">
                      Savings
                    </div>
                    <div className="finance_revenue_card_box_header_value">
                      <span style={{ color: "#00cc61" }}>Bugs Fixed</span>
                    </div>
                  </div>
                  <div className="finance_revenue_card_box_stats">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      color="#00cc61"
                      fontSize={11}
                      style={{ marginRight: "0.2rem" }}
                    />
                    <span style={{ color: "#00cc61" }}>175.5%</span>
                  </div>
                  <div className="finance_revenue_card_box_footer">
                    <span style={{ color: "#ffcc00" }}>357</span>
                  </div>
                </div>

                <div className="finance_revenue_card_box crowd_card">
                  <div className="finance_revenue_card_box_header">
                    <div className="finance_revenue_card_box_header_title">
                      Crowdfunding
                    </div>
                    <div className="finance_revenue_card_box_header_value">
                      <span style={{ color: "#FD334D" }}>Failed</span>
                    </div>
                  </div>
                  <div className="finance_revenue_card_box_stats">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      color="#FD334D"
                      fontSize={11}
                      style={{ marginRight: "0.2rem" }}
                    />
                    <span style={{ color: "#FD334D" }}>27.2%</span>
                  </div>
                  <div className="finance_revenue_card_box_footer">
                    <span style={{ color: "#ffcc00" }}>357</span>
                  </div>
                </div>

                <div className="finance_revenue_card_box cards_card">
                  <div className="finance_revenue_card_box_header">
                    <div className="finance_revenue_card_box_header_title">
                      Cards
                    </div>
                    <div className="finance_revenue_card_box_header_value">
                      Submitted
                    </div>
                  </div>
                  <div className="finance_revenue_card_box_stats">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      color="#00CC61"
                      fontSize={11}
                      style={{ marginRight: "0.2rem" }}
                    />
                    <span style={{ color: "#00CC61" }}>27.2%</span>
                  </div>
                  <div className="finance_revenue_card_box_footer">
                    <span>345</span>
                  </div>
                </div>
              </div>

              <div className="finance_revenue_card_container">
                <div className="finance_revenue_card_box escrow_card">
                  <div className="finance_revenue_card_box_header">
                    <div className="finance_revenue_card_box_header_title">
                      <span style={{ color: "#000" }}>Escrow</span>
                    </div>
                    <div className="finance_revenue_card_box_header_value">
                      Monthly Goals
                    </div>
                  </div>
                  <div className="finance_revenue_card_box_stats">
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      color="#fff"
                      fontSize={11}
                      style={{ marginRight: "0.2rem" }}
                    />
                    175.5%
                  </div>
                  <div className="finance_revenue_card_box_footer">
                    <span>$</span> 1283
                  </div>

                  <div className="revenue_line_progress">
                    <div className="finance_line_progress_indicator_green"></div>
                    <div className="finance_line_progress_bar_gray"></div>
                  </div>

                  <div className="finance_revenue_card_footer_text">
                    YoY Growth
                  </div>
                </div>

                <div className="finance_revenue_card_box crypto_card">
                  <div className="finance_revenue_card_box_header">
                    <div className="finance_revenue_card_box_header_title">
                      <span style={{ color: "#000" }}>Crypto Transaction</span>
                    </div>
                    <div className="finance_revenue_card_box_header_value">
                      <span style={{ color: "#000" }}>Active Users</span>
                    </div>
                  </div>
                  <div className="finance_revenue_card_box_stats">
                    <span style={{ color: "#000" }}> 66.5%</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      color="#000"
                      fontSize={11}
                      style={{ marginLeft: "0.2rem" }}
                    />
                  </div>
                  <div className="finance_revenue_card_box_footer">
                    <span style={{ color: "#000" }}>368</span>
                  </div>

                  <div className="revenue_line_progress">
                    <div className="finance_line_progress_indicator_red"></div>
                    <div className="finance_line_progress_bar_gray"></div>
                  </div>

                  <div className="finance_revenue_card_footer_text">
                    <span style={{ color: "#000" }}>Monthly Subscribers</span>
                  </div>
                </div>

                <div className="finance_revenue_card_box investment_card">
                  <div className="finance_revenue_card_box_header">
                    <div className="finance_revenue_card_box_header_title">
                      Investments Transaction
                    </div>
                    <div className="finance_revenue_card_box_header_value">
                      Returning
                    </div>
                  </div>
                  <div className="finance_revenue_card_box_stats">
                    45
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      color="#fff"
                      fontSize={11}
                      style={{ marginLeft: "0.2rem" }}
                    />
                  </div>
                  <div className="finance_revenue_card_box_footer">87%</div>

                  <div className="revenue_line_progress">
                    <div className="finance_line_progress_indicator_yellow"></div>
                    <div className="finance_line_progress_bar_gray"></div>
                  </div>

                  <div className="finance_revenue_card_footer_text">
                    <span>Successful Payments</span>
                  </div>
                </div>
              </div>

              <div className="finance_revenue_card_container">
                <div className="finance_revenue_card_box ira_card">
                  <div className="finance_revenue_card_box_header">
                    <div className="finance_revenue_card_box_header_title">
                      <span style={{ color: "#000" }}>IRA Fees</span>
                    </div>
                    <div className="finance_revenue_card_box_header_value">
                      Bugs Fixed
                    </div>
                  </div>
                  <div className="finance_revenue_card_box_stats">
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      color="#fff"
                      fontSize={11}
                      style={{ marginRight: "0.2rem" }}
                    />
                    27.2%
                  </div>
                  <div className="finance_revenue_card_box_footer">
                    <span style={{ color: "#ffcc00" }}>1621</span>
                  </div>

                  <div className="revenue_line_progress">
                    <div className="finance_line_progress_indicator_green"></div>
                    <div className="finance_line_progress_bar_gray"></div>
                  </div>

                  <div className="finance_revenue_card_footer_text">
                    Severe Reports
                  </div>
                </div>

                <div className="finance_revenue_card_box crowd_card">
                  <div className="finance_revenue_card_box_header">
                    <div className="finance_revenue_card_box_header_title">
                      Loan
                    </div>
                    <div className="finance_revenue_card_box_header_value">
                      Monthly Goals
                    </div>
                  </div>
                  <div className="finance_revenue_card_box_stats">
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      color="#fff"
                      fontSize={11}
                      style={{ marginRight: "0.2rem" }}
                    />
                    175.5%
                  </div>
                  <div className="finance_revenue_card_box_footer">$1283</div>

                  <div className="revenue_line_progress">
                    <div className="finance_line_progress_indicator_yellow"></div>
                    <div className="finance_line_progress_bar_gray"></div>
                  </div>

                  <div className="finance_revenue_card_footer_text">
                    YoY Growth
                  </div>
                </div>

                <div className="finance_revenue_card_box crowd_card">
                  <div className="finance_revenue_card_box_header">
                    <div className="finance_revenue_card_box_header_title">
                      Asset Management
                    </div>
                    <div className="finance_revenue_card_box_header_value">
                      Totals
                    </div>
                  </div>
                  <div className="finance_revenue_card_box_stats">
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      color="#fff"
                      fontSize={11}
                      style={{ marginRight: "0.2rem" }}
                    />
                    $1576
                  </div>
                  <div className="finance_revenue_card_box_footer">$653</div>

                  <div className="revenue_line_progress">
                    <div className="finance_line_progress_indicator_blue"></div>
                    <div className="finance_line_progress_bar_gray"></div>
                  </div>

                  <div className="finance_revenue_card_footer_text">
                    YoY Growth
                  </div>
                </div>
              </div>
            </div>

            <div className="finance_ratio_card">
              <div className="finance_revenue_card_header">
                Key Financial Rations to Analyze Retail Banks
              </div>

              <div className="finance_ratio_card_container">
                <div className="finance_ratio_card">
                  <div className="finance_ratio_card_header_container">
                    <div className="finance_ratio_card_header">Income</div>
                    <div className="finance_ratio_card_icon">
                      <FontAwesomeIcon
                        icon={faGear}
                        color="#9BA0AA"
                        fontSize={12}
                      />
                    </div>
                  </div>

                  <div className="finance_ratio_card_header_value">
                    <FontAwesomeIcon
                      icon={faBars}
                      fontSize={12}
                      color="#9BA0AA"
                    />
                  </div>

                  <div className="finance_middle_stats_svg_header">
                    Banks Liquidity Ratio
                  </div>
                  <div className="finance_middle_stats_svg">
                    <div
                      style={{
                        width: 65,
                        height: 65,
                        paddingTop: "1rem",
                        color: "black",
                      }}
                    >
                      <CircularProgressbar
                        value={valueTicket}
                        maxValue={100}
                        text={`${liquidityValue}`}
                        styles={buildStyles({
                          // Colors
                          pathColor: "#6E8AE8",
                        })}
                      />
                    </div>
                  </div>

                  <div className="ratio_progress_bar_container">
                        <div className="ratio_progress_bar_value">
                            32%
                        </div>
                        <div className="revenue_line_progress">
                    <div className="finance_line_progress_indicator_yellow"></div>
                    <div className="finance_line_progress_bar_gray"></div>
                  </div>


                  </div>

                  <div className="spending_target">Spending Target</div>
                </div>

                <div className="finance_ratio_card">
                  <div className="finance_ratio_card_header_container">
                    <div className="finance_ratio_card_header">Income</div>
                    <div className="finance_ratio_card_icon">
                      <FontAwesomeIcon
                        icon={faGear}
                        color="#9BA0AA"
                        fontSize={12}
                      />
                    </div>
                  </div>

                  <div className="finance_ratio_card_header_value">
                    <FontAwesomeIcon
                      icon={faBars}
                      fontSize={12}
                      color="#9BA0AA"
                    />
                  </div>

                  <div className="finance_middle_stats_svg_header">
                    Banks Liquidity Ratio
                  </div>
                  <div className="finance_middle_stats_svg">
                    <div
                      style={{
                        width: 65,
                        height: 65,
                        paddingTop: "1rem",
                        color: "black",
                      }}
                    >
                      <CircularProgressbar
                        value={valueTicket}
                        maxValue={100}
                        text={`${liquidityValue}`}
                        styles={buildStyles({
                          // Colors
                          pathColor: "#6E8AE8",
                        })}
                      />
                    </div>
                  </div>

                  <div className="ratio_progress_bar_container">
                        <div className="ratio_progress_bar_value">
                            32%
                        </div>
                        <div className="revenue_line_progress">
                    <div className="finance_line_progress_indicator_yellow"></div>
                    <div className="finance_line_progress_bar_gray"></div>
                  </div>


                  </div>

                  <div className="spending_target">Spending Target</div>
                </div>

                <div className="finance_ratio_card">
                  <div className="finance_ratio_card_header_container">
                    <div className="finance_ratio_card_header">Income</div>
                    <div className="finance_ratio_card_icon">
                      <FontAwesomeIcon
                        icon={faGear}
                        color="#9BA0AA"
                        fontSize={12}
                      />
                    </div>
                  </div>

                  <div className="finance_ratio_card_header_value">
                    <FontAwesomeIcon
                      icon={faBars}
                      fontSize={12}
                      color="#9BA0AA"
                    />
                  </div>

                  <div className="finance_middle_stats_svg_header">
                    Banks Liquidity Ratio
                  </div>
                  <div className="finance_middle_stats_svg">
                    <div
                      style={{
                        width: 65,
                        height: 65,
                        paddingTop: "1rem",
                        color: "black",
                      }}
                    >
                      <CircularProgressbar
                        value={valueTicket}
                        maxValue={100}
                        text={`${liquidityValue}`}
                        styles={buildStyles({
                          // Colors
                          pathColor: "#6E8AE8",
                        })}
                      />
                    </div>
                  </div>

                  <div className="ratio_progress_bar_container">
                        <div className="ratio_progress_bar_value">
                            32%
                        </div>
                        <div className="revenue_line_progress">
                    <div className="finance_line_progress_indicator_yellow"></div>
                    <div className="finance_line_progress_bar_gray"></div>
                  </div>


                  </div>

                  <div className="spending_target">Spending Target</div>
                </div>
              </div>

              <div className="finance_ratio_card_container">
                <div className="finance_ratio_card">
                  <div className="finance_ratio_card_header_container">
                    <div className="finance_ratio_card_header">Income</div>
                    <div className="finance_ratio_card_icon">
                      <FontAwesomeIcon
                        icon={faGear}
                        color="#9BA0AA"
                        fontSize={12}
                      />
                    </div>
                  </div>

                  <div className="finance_ratio_card_header_value">
                    <FontAwesomeIcon
                      icon={faBars}
                      fontSize={12}
                      color="#9BA0AA"
                    />
                  </div>

                  <div className="finance_middle_stats_svg_header">
                    Banks Liquidity Ratio
                  </div>
                  <div className="finance_middle_stats_svg">
                    <div
                      style={{
                        width: 65,
                        height: 65,
                        paddingTop: "1rem",
                        color: "black",
                      }}
                    >
                      <CircularProgressbar
                        value={valueTicket}
                        maxValue={100}
                        text={`${liquidityValue}`}
                        styles={buildStyles({
                          // Colors
                          pathColor: "#6E8AE8",
                        })}
                      />
                    </div>
                  </div>

                  <div className="ratio_progress_bar_container">
                        <div className="ratio_progress_bar_value">
                            32%
                        </div>
                        <div className="revenue_line_progress">
                    <div className="finance_line_progress_indicator_yellow"></div>
                    <div className="finance_line_progress_bar_gray"></div>
                  </div>


                  </div>

                  <div className="spending_target">Spending Target</div>
                </div>

                <div className="finance_ratio_card">
                  <div className="finance_ratio_card_header_container">
                    <div className="finance_ratio_card_header">Income</div>
                    <div className="finance_ratio_card_icon">
                      <FontAwesomeIcon
                        icon={faGear}
                        color="#9BA0AA"
                        fontSize={12}
                      />
                    </div>
                  </div>

                  <div className="finance_ratio_card_header_value">
                    <FontAwesomeIcon
                      icon={faBars}
                      fontSize={12}
                      color="#9BA0AA"
                    />
                  </div>

                  <div className="finance_middle_stats_svg_header">
                    Banks Liquidity Ratio
                  </div>
                  <div className="finance_middle_stats_svg">
                    <div
                      style={{
                        width: 65,
                        height: 65,
                        paddingTop: "1rem",
                        color: "black",
                      }}
                    >
                      <CircularProgressbar
                        value={valueTicket}
                        maxValue={100}
                        text={`${liquidityValue}`}
                        styles={buildStyles({
                          // Colors
                          pathColor: "#6E8AE8",
                        })}
                      />
                    </div>
                  </div>

                  <div className="ratio_progress_bar_container">
                        <div className="ratio_progress_bar_value">
                            32%
                        </div>
                        <div className="revenue_line_progress">
                    <div className="finance_line_progress_indicator_yellow"></div>
                    <div className="finance_line_progress_bar_gray"></div>
                  </div>


                  </div>

                  <div className="spending_target">Spending Target</div>
                </div>

                <div className="finance_ratio_card">
                  <div className="finance_ratio_card_header_container">
                    <div className="finance_ratio_card_header">Income</div>
                    <div className="finance_ratio_card_icon">
                      <FontAwesomeIcon
                        icon={faGear}
                        color="#9BA0AA"
                        fontSize={12}
                      />
                    </div>
                  </div>

                  <div className="finance_ratio_card_header_value">
                    <FontAwesomeIcon
                      icon={faBars}
                      fontSize={12}
                      color="#9BA0AA"
                    />
                  </div>

                  <div className="finance_middle_stats_svg_header">
                    Banks Liquidity Ratio
                  </div>
                  <div className="finance_middle_stats_svg">
                    <div
                      style={{
                        width: 65,
                        height: 65,
                        paddingTop: "1rem",
                        color: "black",
                      }}
                    >
                      <CircularProgressbar
                        value={valueTicket}
                        maxValue={100}
                        text={`${liquidityValue}`}
                        styles={buildStyles({
                          // Colors
                          pathColor: "#6E8AE8",
                        })}
                      />
                    </div>
                  </div>

                  <div className="ratio_progress_bar_container">
                        <div className="ratio_progress_bar_value">
                            32%
                        </div>
                        <div className="revenue_line_progress">
                    <div className="finance_line_progress_indicator_yellow"></div>
                    <div className="finance_line_progress_bar_gray"></div>
                  </div>


                  </div>

                  <div className="spending_target">Spending Target</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kyc;
