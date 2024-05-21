import { useState } from "react";
import "./Kyc.css";
import Header from "../Components/Header/Header";
import CustomSideBar from "../Components/CustomSideBar/CustomSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCircle,
  faLocationPin,
  faMessage,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../Components/CustomButton";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const steps = [
  {
    label: "KYC Registration",
    description: `02/04/20`,
  },
  {
    label: "Aadhar Card and Photo Verifieation",
    description: `07/05/20`,
  },
  {
    label: "Ration Card and Pan Card Verification",
    description: `Incomplete`,
  },
];

const Kyc = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Header />
      <div className="main_kyc_body">
        <div className="m_sidebar_container">
          <CustomSideBar />
        </div>

        <div className="kyc_body">
          <div className="kyc_body_title_nav">
            {" "}
            <div style={{ marginRight: "8px" }}>
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} color="#583AD2" />{" "}
            </div>
            Back to Dashboard
          </div>
          <div className="kyc_body_title">KYC Status</div>

          <div className="kyc_body_info">
            {/* <div className="kyc_status_container">
              <div className="kyc_status"> Status </div>{" "}
              <div className="kyc_status_text">Incomplete</div>
            </div> */}

            <div className="kyc_info_container">
              <div className="kyc_status"> Status</div>{" "}
              <div className="kyc_status_text"> Incomplete</div>{" "}
            </div>

            <div className="kyc_info_container">
              <div className="kyc_request"> Request ID</div>{" "}
              <div className="kyc_request_text"> AF28698237</div>{" "}
            </div>
          </div>

          <div className="kyc_body_container">
            <div className="kyc_credentials_container">
              <div className="kyc_credentials_header">
                <CustomButton
                  borderRadius={18}
                  backgroundColor={"var(--primary-color)"}
                >
                  Credentials
                </CustomButton>
              </div>

              <div className="kyc_profile_pic_container">
                <div className="kyc_profile_pic">
                  <img src="/img/man.png" />
                </div>
              </div>

              <div className="kyc_name_container">
                <div className="kyc_name_text">Brie Larson</div>
                <div className="kyc_address_text">
                  <div className="kyc_address_icon">
                    <div style={{ paddingRight: "10px" }}>
                      {" "}
                      <FontAwesomeIcon icon={faLocationPin} color="#583AD2" />
                    </div>
                    New York, New York
                  </div>
                </div>
              </div>

              <div className="kyc_account_type_container">
                <div className="kyc_account_type_title">Starter/Premium</div>
                <div className="kyc_account_type_text">Active Account</div>
              </div>

              <div className="kyc_processing_container">
                <div className="processing_left_box">
                  <div className="processing_header_container">
                    KYC
                    <div className="processing_status_text">Processing</div>
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

                <div className="processing_right_box">
                  <div className="processing_right_item">
                    ID Card Front
                    <CustomButton
                      width={50}
                      fontSize={".8rem"}
                      backgroundColor={"var(--primary-color)"}
                    >
                      Download
                    </CustomButton>
                  </div>

                  <div className="processing_right_item">
                    ID Card Back
                    <CustomButton
                      width={50}
                      fontSize={".8rem"}
                      backgroundColor={"var(--primary-color)"}
                    >
                      Download
                    </CustomButton>
                  </div>

                  <div className="processing_right_item">
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
            </div>

            <div className="document_status_container">
              <div className="document_status_header">
                <CustomButton
                  borderRadius={18}
                  backgroundColor={"var(--primary-color)"}
                  width={140}
                >
                  Document Status
                </CustomButton>
              </div>

              <div className="document_box_container">
                <div className="document_box">
                  <div className="document_name">Aadhar Card</div>

                  <div className="document_verification_container">
                    <FontAwesomeIcon
                      icon={faCircle}
                      color="#00CC61"
                      fontSize={12}
                    />
                    <div style={{ marginLeft: "8px" }}>Verified</div>
                  </div>

                  <div className="document_cta">
                    <div className="document_view">View</div>
                    <div className="document_print">Print</div>
                    <div className="document_reupload">Re-upload</div>
                  </div>
                </div>

                <div className="document_box">
                  <div className="document_name">Pan Card</div>

                  <div className="document_verification_container">
                    <FontAwesomeIcon
                      icon={faCircle}
                      color="#FD334D"
                      fontSize={12}
                    />
                    <div style={{ marginLeft: "8px" }}>Unverified</div>
                  </div>

                  <div className="document_cta">
                    <div className="document_view">Upload</div>
                    {/* <div className="document_print">Print</div> */}
                    <div className="document_reupload">Scan</div>
                  </div>
                </div>

                <div className="document_box">
                  <div className="document_name">Ration Card</div>

                  <div className="document_verification_container">
                    <FontAwesomeIcon
                      icon={faCircle}
                      color="#FD334D"
                      fontSize={12}
                    />
                    <div style={{ marginLeft: "8px" }}>Unverified</div>
                  </div>

                  <div className="document_cta">
                    <div className="document_view">Upload</div>
                    {/* <div className="document_print">Print</div> */}
                    <div className="document_reupload">Scan</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="document_status_container">
              <div className="document_status_header">
                <CustomButton
                  borderRadius={18}
                  backgroundColor={"var(--primary-color)"}
                  width={140}
                >
                  KYC Status
                </CustomButton>
              </div>

              <div className="document_step_container">
                <Box sx={{ maxWidth: 400 }}>
                  <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          optional={
                            index === 2 ? (
                              <Typography variant="caption">
                                Last step
                              </Typography>
                            ) : null
                          }
                        >
                          {step.label}
                        </StepLabel>
                        <StepContent>
                          <Typography>{step.description}</Typography>
                          <Box sx={{ mb: 2 }}>
                            <div>
                              <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                {index === steps.length - 1
                                  ? "Finish"
                                  : "Continue"}
                              </Button>
                              <Button
                                disabled={index === 0}
                                onClick={handleBack}
                                sx={{ mt: 1, mr: 1 }}
                              >
                                Back
                              </Button>
                            </div>
                          </Box>
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                  {activeStep === steps.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                      <Typography>
                        All steps completed - you&apos;re finished
                      </Typography>
                      <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                      </Button>
                    </Paper>
                  )}
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kyc;
