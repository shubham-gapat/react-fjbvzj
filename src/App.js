import React, { useState } from 'react';
import { Route, withRouter } from 'react-router';
import ProgressBar from 'custom-react-step-progress-bar';

const stepperComponent = (props) => {
  const { path } = props.match;
  const [step, setStep] = useState(0);
  const [stepOne, setStepOne] = useState(false);
  const [stepTwo, setStepTwo] = useState(false);
  const [stepThree, setStepThree] = useState(false);

  const onStepThreeClick = () => {
    setStep(2);
    props.history.push(`${path}/step-3`);
  };

  const onStepTwoClick = () => {
    setStep(1);
    console.log(path);
    props.history.push(`${path}/step-2`);
  };

  const onStepOneClick = () => {
    setStep(0);
    props.history.push(path);
  };

  const progressBarMenu = [
    {
      stepName: 'Step One',
      onClick: onStepOneClick,
      completeStep: stepOne,
    },
    {
      stepName: 'Step Two',
      onClick: onStepTwoClick,
      completeStep: stepTwo,
    },
    {
      stepName: 'Step Three',
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
        <Route exact path={`${path}`} component={StepOneDetails} />
        <Route exact path={`${path}/step-2`} component={StepTwoDetails} />
        <Route exact path={`${path}/step-3`} component={StepThreeDetails} />
      </div>
    </div>
  );
};

export default withRouter(stepperComponent);
