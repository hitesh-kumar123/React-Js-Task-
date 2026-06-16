import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveProfessionalInfo } from "../../features/onboarding/onboardingSlice";
import FormField from "../FormField";
import NavigationButtons from "../NavigationButtons";

const ProfessionalInfoForm = ({ onNext, onBack }) => {
  const dispatch = useDispatch();
  const saved = useSelector((s) => s.onboarding.professionalInfo);

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: saved });

  const onSubmit = (data) => {
    dispatch(saveProfessionalInfo(data));
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-card">
      <h2>Professional Information</h2>

      <FormField
        label="Job Title"
        name="jobTitle"
        register={register("jobTitle", { required: "Job title is required" })}
        error={errors.jobTitle}
      />
      <FormField
        label="Company Name"
        name="company"
        register={register("company", { required: "Company is required" })}
        error={errors.company}
      />
      <FormField
        label="Years of Experience"
        name="experience"
        type="number"
        register={register("experience", {
          required: "Experience is required",
          min: { value: 0, message: "Cannot be negative" },
        })}
        error={errors.experience}
      />
      <FormField
        label="Industry"
        name="industry"
        options={["Technology", "Finance", "Healthcare", "Education", "Other"]}
        register={register("industry", { required: "Please select an industry" })}
        error={errors.industry}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </form>
  );
};

export default ProfessionalInfoForm;