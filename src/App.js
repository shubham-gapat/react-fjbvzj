import React, { useState } from "react";
import { Route } from "react-router";
import ProgressBar from "custom-react-step-progress-bar";

const stepperComponent = props => {
  const [step, setStep] = useState(0);
  const [stepOne, setStepOne] = useState(false);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);

  const preFixPath = prefix => path => `${prefix}${path}`;

  const LANDING = "";

  const getRegPath = preFixPath(LANDING);

  const onStepThreeClick = () => {
    setStep(2);
    props.history.push(getRegPath("/step-3"));
  };

  const onStepTwoClick = () => {
    setStep(1);
    props.history.push(getRegPath("/step-2"));
  };

  const onStepOneClick = () => {
    setStep(0);
    props.history.push(getRegPath("/"));
  };

  const progressBarMenu = [
    {
      stepName: "Step One",
      onClick: onStepOneClick,
      completeStep: stepOne,
    },
    {
      stepName: "Step Two",
      onClick: onStepTwoClick,
      completeStep: stepTwo,
    },
    {
      stepName: "Step Three",
      onClick: onStepThreeClick,
      completeStep: stepThree,
    },
  ];
  const StepOneDetails = () => {
    return (
      <div>
        <p>step 1</p>
        <button
          onClick={() => {
            setStepOne(true);
            onStepTwoClick();
          }}
        >
          done
        </button>
      </div>
    );
  };

  const StepTwoDetails = () => {
    return (
      <div>
        <p>step 2</p>
        <button
          onClick={() => {
            setStepTwo(true);
            onStepThreeClick();
          }}
        >
          done
        </button>
      </div>
    );
  };

  const StepThreeDetails = () => {
    return (
      <div>
        <p>step 3</p>
        <button
          onClick={() => {
            setStepThree(true);
          }}
        >
          done
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className="add-patients-header">
        <ProgressBar progressBarMenu={progressBarMenu} currentActive={step} />
      </div>
      <div className="add-patient-children">
        <Route exact path={getRegPath("/")} component={StepOneDetails} />
        <Route exact path={getRegPath("/step-2")} component={StepTwoDetails} />
        <Route
          exact
          path={getRegPath("/step-3")}
          component={StepThreeDetails}
        />
      </div>
    </div>
  );
};

export default stepperComponent;
