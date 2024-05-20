import "./ProgressSteps.css";

const ProgressSteps = () => {
  const steps = [
    { name: "KYC Registration", date: "02/04/20", status: "completed" },
    {
      name: "Aadhar Card and Photo Verification",
      date: "07/05/20",
      status: "completed",
    },
    { name: "Ration Card and Pan Card Verification", status: "incomplete" },
    { name: "KYC Completion", status: "pending" },
  ];

  return (
    <div className="progress-steps">
      {steps.map((step, index) => (
        <div className={`step ${step.status}`} key={index}>
          {/* <div className="circle"></div>
                    <div className="details">
                        <span className="name">{step.name}</span>
                        {step.date && <span className="date">{step.date}</span>}
                        {step.name === "Aadhar Card and Photo Verification" && <button className="view-button">View</button>}
                    </div> */}

          <ul className="events">
            <li>
              <div className="10:03">10:03</div>
              <span>
                <strong>Bat &amp; Ball</strong> On div
              </span>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;
