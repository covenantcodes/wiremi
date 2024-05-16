import "./ClientArea.css";
import Header from "../Components/Header/Header";
import CustomSideBar from "../Components/CustomSideBar/CustomSideBar";
import CustomButton from "../Components/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowDown,
  faBackwardStep,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faForwardStep,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

const ClientArea = () => {
  return (
    <div>
      <Header />

      <div className="main_client_body">
        <div className="m_sidebar_container">
          <CustomSideBar />
        </div>

        <div className="client_area_body">
          {/* <div className="client_area_body_title">Client Area</div> */}
          <div className="client_area_body_header">
            <CustomButton
              width={150}
              fontSize={15}
              backgroundColor={"#FFD06C"}
              color={"#000"}
              fontWeight={500}
              borderWidth="2px"
              borderColor={"#FFD06C"}
            >
              Add New Client
            </CustomButton>
            <CustomButton
              width={70}
              backgroundColor={"#F5EFE3"}
              color={"#000"}
              fontWeight={500}
              fontSize={14}
              borderWidth="2px"
              borderColor={"#B99470"}
              marginLeft={"8px"}
            >
              EDIT
            </CustomButton>
          </div>

          <div className="client_area_table_container">
            <div className="client_area_table_header">
              Client Area
              <div className="client_area_table_header_cta">
                <CustomButton
                  width={50}
                  backgroundColor={"#F6F6F6"}
                  color={"#898989"}
                  fontWeight={500}
                  fontSize={14}
                  borderWidth="2px"
                  borderColor={"#D7D7D7"}
                  marginLeft={"8px"}
                  icon={
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      fontSize={16}
                      color="#898989"
                    />
                  }
                >
                  Export
                </CustomButton>

                <div className="client_area_table_header_cta_btn_container">
                  <FontAwesomeIcon
                    icon={faGear}
                    fontSize={16}
                    color="#898989"
                  />
                  <div style={{ marginLeft: "8px", display: "flex" }}>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      fontSize={16}
                      color="#898989"
                    />
                  </div>
                </div>
              </div>
            </div>
            <table className="client_area_table">
              <tr>
                <th className="client_area_table_th">
                  {" "}
                  <FontAwesomeIcon
                    icon={faSquare}
                    fontSize={16}
                    color="#D4D4D4"
                  />
                </th>
                <th className="client_area_table_th"> WI_id</th>

                <th className="client_area_table_th"> Status</th>

                <th className="client_area_table_th"> User</th>

                <th className="client_area_table_th"> Email</th>
                <th className="client_area_table_th"> Role Indent</th>
                <th className="client_area_table_th"> Created</th>
                <th className="client_area_table_th"> Account Type</th>
              </tr>

              <tr>
                <td className="client_area_table_td">
                  {" "}
                  <FontAwesomeIcon
                    icon={faSquare}
                    fontSize={16}
                    color="#D4D4D4"
                  />
                </td>
                <td className="client_area_table_td"> 084</td>

                <td className="client_area_table_td"> Active</td>

                <td className="client_area_table_td"> Else Malon</td>

                <td className="client_area_table_td"> elsie.malon@tyler.com</td>
                <td className="client_area_table_td"> Can edit</td>
                <td className="client_area_table_td">06/06/2020 </td>
                <td className="client_area_table_td"> Starter</td>
              </tr>

              <tr>
                <td className="client_area_table_td">
                  {" "}
                  <FontAwesomeIcon
                    icon={faSquare}
                    fontSize={16}
                    color="#D4D4D4"
                  />
                </td>
                <td className="client_area_table_td"> 134</td>

                <td className="client_area_table_td"> Active</td>

                <td className="client_area_table_td"> Christopher Parsons</td>

                <td className="client_area_table_td"> pardond@hotmail.com</td>
                <td className="client_area_table_td"> Can edit</td>
                <td className="client_area_table_td">06/08/2020 </td>
                <td className="client_area_table_td"> Premium</td>
              </tr>

              <tr>
                <td className="client_area_table_td">
                  {" "}
                  <FontAwesomeIcon
                    icon={faSquare}
                    fontSize={16}
                    color="#D4D4D4"
                  />
                </td>
                <td className="client_area_table_td"> 03</td>

                <td className="client_area_table_td"> Inactive</td>

                <td className="client_area_table_td"> Lula Drake</td>

                <td className="client_area_table_td">
                  {" "}
                  ryley_dubuque@jonas.com
                </td>
                <td className="client_area_table_td"> Can edit</td>
                <td className="client_area_table_td">12/15/2020 </td>
                <td className="client_area_table_td"> Business</td>
              </tr>

              <tr>
                <td className="client_area_table_td">
                  {" "}
                  <FontAwesomeIcon
                    icon={faSquare}
                    fontSize={16}
                    color="#D4D4D4"
                  />
                </td>
                <td className="client_area_table_td"> 084</td>

                <td className="client_area_table_td"> Active</td>

                <td className="client_area_table_td"> Else Malon</td>

                <td className="client_area_table_td"> elsie.malon@tyler.com</td>
                <td className="client_area_table_td"> Can edit</td>
                <td className="client_area_table_td">06/06/2020 </td>
                <td className="client_area_table_td"> Starter</td>
              </tr>

              <tr>
                <td className="client_area_table_td">
                  {" "}
                  <FontAwesomeIcon
                    icon={faSquare}
                    fontSize={16}
                    color="#D4D4D4"
                  />
                </td>
                <td className="client_area_table_td"> 134</td>

                <td className="client_area_table_td"> Active</td>

                <td className="client_area_table_td"> Christopher Parsons</td>

                <td className="client_area_table_td"> pardond@hotmail.com</td>
                <td className="client_area_table_td"> Can edit</td>
                <td className="client_area_table_td">06/08/2020 </td>
                <td className="client_area_table_td"> Premium</td>
              </tr>

              <tr>
                <td className="client_area_table_td">
                  {" "}
                  <FontAwesomeIcon
                    icon={faSquare}
                    fontSize={16}
                    color="#D4D4D4"
                  />
                </td>
                <td className="client_area_table_td"> 03</td>

                <td className="client_area_table_td"> Inactive</td>

                <td className="client_area_table_td"> Lula Drake</td>

                <td className="client_area_table_td">
                  {" "}
                  ryley_dubuque@jonas.com
                </td>
                <td className="client_area_table_td"> Can edit</td>
                <td className="client_area_table_td">12/15/2020 </td>
                <td className="client_area_table_td"> Business</td>
              </tr>

              <tr>
                <td className="client_area_table_td">
                  {" "}
                  <FontAwesomeIcon
                    icon={faSquare}
                    fontSize={16}
                    color="#D4D4D4"
                  />
                </td>
                <td className="client_area_table_td"> 084</td>

                <td className="client_area_table_td"> Active</td>

                <td className="client_area_table_td"> Else Malon</td>

                <td className="client_area_table_td"> elsie.malon@tyler.com</td>
                <td className="client_area_table_td"> Can edit</td>
                <td className="client_area_table_td">06/06/2020 </td>
                <td className="client_area_table_td"> Starter</td>
              </tr>

              <tr>
                <td className="client_area_table_td">
                  {" "}
                  <FontAwesomeIcon
                    icon={faSquare}
                    fontSize={16}
                    color="#D4D4D4"
                  />
                </td>
                <td className="client_area_table_td"> 134</td>

                <td className="client_area_table_td"> Active</td>

                <td className="client_area_table_td"> Christopher Parsons</td>

                <td className="client_area_table_td"> pardond@hotmail.com</td>
                <td className="client_area_table_td"> Can edit</td>
                <td className="client_area_table_td">06/08/2020 </td>
                <td className="client_area_table_td"> Premium</td>
              </tr>

              <tr>
                <td className="client_area_table_td">
                  {" "}
                  <FontAwesomeIcon
                    icon={faSquare}
                    fontSize={16}
                    color="#D4D4D4"
                  />
                </td>
                <td className="client_area_table_td"> 03</td>

                <td className="client_area_table_td"> Inactive</td>

                <td className="client_area_table_td"> Lula Drake</td>

                <td className="client_area_table_td">
                  {" "}
                  ryley_dubuque@jonas.com
                </td>
                <td className="client_area_table_td"> Can edit</td>
                <td className="client_area_table_td">12/15/2020 </td>
                <td className="client_area_table_td"> Business</td>
              </tr>
              <tr>
                <td className="client_area_table_td">
                  {" "}
                  <FontAwesomeIcon
                    icon={faSquare}
                    fontSize={16}
                    color="#D4D4D4"
                  />
                </td>
                <td className="client_area_table_td"> 084</td>

                <td className="client_area_table_td"> Active</td>

                <td className="client_area_table_td"> Else Malon</td>

                <td className="client_area_table_td"> elsie.malon@tyler.com</td>
                <td className="client_area_table_td"> Can edit</td>
                <td className="client_area_table_td">06/06/2020 </td>
                <td className="client_area_table_td"> Starter</td>
              </tr>

              <tr>
                <td className="client_area_table_td">
                  {" "}
                  <FontAwesomeIcon
                    icon={faSquare}
                    fontSize={16}
                    color="#D4D4D4"
                  />
                </td>
                <td className="client_area_table_td"> 134</td>

                <td className="client_area_table_td"> Active</td>

                <td className="client_area_table_td"> Christopher Parsons</td>

                <td className="client_area_table_td"> pardond@hotmail.com</td>
                <td className="client_area_table_td"> Can edit</td>
                <td className="client_area_table_td">06/08/2020 </td>
                <td className="client_area_table_td"> Premium</td>
              </tr>
            </table>

            <div className="client_area_pagination_container">
              <div className="client_area_pagination_container_name">
                Per Page{" "}
                <div className="client_area_pagination_caret">
                  10{" "}
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    fontSize={16}
                    color="#5A5A5A"
                  />
                </div>
              </div>
              <div className="client_area_pagination_nav">
                <div className="client_area_pagination_nav_btn">
                  {" "}
                  <FontAwesomeIcon
                    icon={faBackwardStep}
                    fontSize={16}
                    color="#898989"
                  />
                </div>
                <div className="client_area_pagination_nav_btn">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    fontSize={16}
                    color="#898989"
                  />
                </div>
                <div className="client_area_pagination_nav_btn">1</div>
                <div className="client_area_pagination_nav_btn">2</div>
                <div className="client_area_pagination_nav_btn">3</div>
                <div className="client_area_pagination_nav_btn">4</div>
                <div className="client_area_pagination_nav_btn">5</div>
                <div className="client_area_pagination_nav_btn">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    fontSize={16}
                    color="#898989"
                  />
                </div>
                <div className="client_area_pagination_nav_btn">
                  {" "}
                  <FontAwesomeIcon
                    icon={faForwardStep}
                    fontSize={16}
                    color="#898989"
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

export default ClientArea;
