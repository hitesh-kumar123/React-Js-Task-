import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetOnboarding, setStep } from "../features/onboarding/onboardingSlice";

import StepIndicator from "../components/StepIndicator";
import PersonalInfoForm from "../components/forms/PersonalInfoForm";
import ContactInfoForm from "../components/forms/ContactInfoForm";
import ProfessionalInfoForm from "../components/forms/ProfessionalInfoForm";
import PreferencesForm from "../components/forms/PreferencesForm";
import AccountSetupForm from "../components/forms/AccountSetupForm";

const TOTAL_STEPS = 5;

const OnboardingPage = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((s) => s.onboarding.currentStep);

  // Track which steps have been completed so StepIndicator can allow clicks
  const [visitedSteps, setVisitedSteps] = useState([0]);

  const [isDone, setIsDone] = useState(false); // show success screen

  // Move to next step + mark it as visited
  const goNext = () => {
    const next = currentStep + 1;
    dispatch(setStep(next));
    setVisitedSteps((prev) => [...new Set([...prev, next])]);

    
  };

  // Move to previous step
  const goBack = () => dispatch(setStep(currentStep - 1));

  // All steps done!
  const handleFinish = () => {
  localStorage.removeItem("onboardingData"); 
  dispatch(resetOnboarding());              
  setIsDone(true);                           
};

  // Map step index → form component
  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoForm onNext={goNext} />;
      case 1:
        return <ContactInfoForm onNext={goNext} onBack={goBack} />;
      case 2:
        return <ProfessionalInfoForm onNext={goNext} onBack={goBack} />;
      case 3:
        return <PreferencesForm onNext={goNext} onBack={goBack} />;
      case 4:
        return <AccountSetupForm onBack={goBack} onFinish={handleFinish} />;
      default:
        return null;
    }
  };

  // Success screen after finishing
  if (isDone) {
    return (
      <div className="success-screen">
        <div className="success-card">
          <div className="success-icon">🎉</div>
          <h2>You're all set!</h2>
          <p>Your onboarding is complete. Welcome aboard!</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(setStep(0));
              setIsDone(false);
              setVisitedSteps([0]);
            }}
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="onboarding-wrapper">
      <div className="onboarding-container">
        {/* Header */}
        <div className="onboarding-header">
          <h1>Create Your Account</h1>
          <p>
            Step {currentStep + 1} of {TOTAL_STEPS}
          </p>
        </div>

        {/* Step indicator at the top */}
        <StepIndicator visitedSteps={visitedSteps} />

        {/* Active form */}
        <div className="form-wrapper">{renderForm()}</div>
      </div>
    </div>
  );
};

export default OnboardingPage;
