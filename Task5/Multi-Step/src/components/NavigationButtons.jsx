

const NavigationButtons = ({ onBack, onNext, isFirst, isLast }) => {
  return (
    <div className="nav-buttons">
      {/* Hide "Back" on the very first step */}
      {!isFirst && (
        <button type="button" className="btn btn-secondary" onClick={onBack}>
          ← Back
        </button>
      )}

      {/* Submit triggers form validation via the form's onSubmit */}
      <button type="submit" className="btn btn-primary">
        {isLast ? "Finish 🎉" : "Next →"}
      </button>
    </div>
  );
};

export default NavigationButtons;