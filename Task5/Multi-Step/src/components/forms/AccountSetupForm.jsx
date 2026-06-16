import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveAccountSetup } from "../../features/onboarding/onboardingSlice";
import FormField from "../FormField";
import NavigationButtons from "../NavigationButtons";

const AccountSetupForm = ({ onBack, onFinish }) => {
  const dispatch = useDispatch();
  const saved = useSelector((s) => s.onboarding.accountSetup);

  const { register, handleSubmit, watch, formState: { errors } } = useForm({ defaultValues: saved });

  // watch("password") lets us read the password field live for confirm-match check
  const password = watch("password");

  const onSubmit = (data) => {
    dispatch(saveAccountSetup(data));
    onFinish(); // signal OnboardingPage that we're done
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-card">
      <h2>Account Setup</h2>

      <FormField
        label="Username"
        name="username"
        register={register("username", {
          required: "Username is required",
          minLength: { value: 4, message: "At least 4 characters" },
        })}
        error={errors.username}
      />
      <FormField
        label="Password"
        name="password"
        type="password"
        register={register("password", {
          required: "Password is required",
          minLength: { value: 6, message: "At least 6 characters" },
        })}
        error={errors.password}
      />
      <FormField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        register={register("confirmPassword", {
          required: "Please confirm your password",
          validate: (val) => val === password || "Passwords do not match",
        })}
        error={errors.confirmPassword}
      />

      {/* isLast = true → button shows "Finish 🎉" */}
      <NavigationButtons onBack={onBack} isLast />
    </form>
  );
};

export default AccountSetupForm;