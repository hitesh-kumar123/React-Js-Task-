// StepIndicator.jsx - Shows the 5 steps at the top
// Clicking a step navigates to it (only if that step was already visited)

import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../features/onboarding/onboardingSlice";

// Step labels shown below each circle
const STEPS = [
  "Personal",
  "Contact",
  "Professional",
  "Preferences",
  "Account",
];

const StepIndicator = ({ visitedSteps }) => {
  const dispatch = useDispatch();
  const currentStep = useSelector((s) => s.onboarding.currentStep);

  return (
    <div className="step-indicator">
      {STEPS.map((label, index) => {
        const isActive = index === currentStep;
        const isVisited = visitedSteps.includes(index);

        return (
          <div key={index} className="step-item">
            {/* Line between steps (not before the first) */}
            {index !== 0 && <div className={`step-line ${isVisited ? "visited" : ""}`} />}

            {/* Circle button - clickable only if visited */}
            <button
              className={`step-circle ${isActive ? "active" : ""} ${isVisited ? "visited" : ""}`}
              onClick={() => isVisited && dispatch(setStep(index))}
              title={isVisited ? `Go to ${label}` : "Complete previous steps first"}
            >
              {isVisited && !isActive ? "✓" : index + 1}
            </button>

            <span className={`step-label ${isActive ? "active" : ""}`}>{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;