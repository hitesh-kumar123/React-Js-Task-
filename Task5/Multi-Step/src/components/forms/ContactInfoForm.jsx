import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveContactInfo, setStep } from "../../features/onboarding/onboardingSlice";
import FormField from "../FormField";
import NavigationButtons from "../NavigationButtons";

const ContactInfoForm = ({ onNext, onBack }) => {
  const dispatch = useDispatch();
  const saved = useSelector((s) => s.onboarding.contactInfo);

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: saved });

  const onSubmit = (data) => {
    dispatch(saveContactInfo(data));
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-card">
      <h2>Contact Information</h2>

      <FormField
        label="Email"
        name="email"
        type="email"
        register={register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" },
        })}
        error={errors.email}
      />
      <FormField
        label="Phone Number"
        name="phone"
        type="tel"
        register={register("phone", {
          required: "Phone is required",
          pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit number" },
        })}
        error={errors.phone}
      />
      <FormField
        label="City"
        name="city"
        register={register("city", { required: "City is required" })}
        error={errors.city}
      />
      <FormField
        label="Country"
        name="country"
        register={register("country", { required: "Country is required" })}
        error={errors.country}
      />

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </form>
  );
};

export default ContactInfoForm;