import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  savePersonalInfo,
  setStep,
} from "../../features/onboarding/onboardingSlice";
import FormField from "../FormField";
import NavigationButtons from "../NavigationButtons";

const PersonalInfoForm = ({ onNext }) => {
  const dispatch = useDispatch();
  // Pre-fill form if user comes back to this step
  const saved = useSelector((s) => s.onboarding.personalInfo);

  const {
    register, // connects input to react-hook-form
    handleSubmit, // wraps onSubmit with validation
    formState: { errors },
  } = useForm({ defaultValues: saved });

  // Called only when ALL validations pass
  const onSubmit = (data) => {
    dispatch(savePersonalInfo(data)); // save to Redux
    onNext(); // go to next step
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-card">
      <h2>Personal Information</h2>

      <FormField
        label="First Name"
        name="firstName"
        register={register("firstName", { required: "First name is required" })}
        error={errors.firstName}
      />
      <FormField
        label="Last Name"
        name="lastName"
        register={register("lastName", { required: "Last name is required" })}
        error={errors.lastName}
      />
      <FormField
        label="Date of Birth"
        name="dob"
        type="date"
        register={register("dob", { required: "Date of birth is required" })}
        error={errors.dob}
      />
      <FormField
        label="Gender"
        name="gender"
        options={["Male", "Female", "Prefer not to say"]}
        register={register("gender", { required: "Please select a gender" })}
        error={errors.gender}
      />

      <NavigationButtons isFirst onNext={onNext} />
    </form>
  );
};

export default PersonalInfoForm;
