import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { savePreferences } from "../../features/onboarding/onboardingSlice";
import FormField from "../FormField";
import NavigationButtons from "../NavigationButtons";

const PreferencesForm = ({ onNext, onBack }) => {
  const dispatch = useDispatch();
  const saved = useSelector((s) => s.onboarding.preferences);

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: saved });

  const onSubmit = (data) => {
    dispatch(savePreferences(data));
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-card">
      <h2>Preferences</h2>

      <FormField
        label="Preferred Theme"
        name="theme"
        options={["Light", "Dark", "System Default"]}
        register={register("theme", { required: "Please pick a theme" })}
        error={errors.theme}
      />
      <FormField
        label="Language"
        name="language"
        options={["English", "Hindi", "Spanish", "French"]}
        register={register("language", { required: "Please select a language" })}
        error={errors.language}
      />
      <FormField
        label="Timezone"
        name="timezone"
        options={["IST (UTC+5:30)", "UTC", "EST (UTC-5)", "PST (UTC-8)"]}
        register={register("timezone", { required: "Please select a timezone" })}
        error={errors.timezone}
      />

      {/* Checkbox - slightly different from FormField, so inline here */}
      <div className="form-field checkbox-field">
        <label>
          <input type="checkbox" {...register("notifications")} />
          &nbsp; Enable email notifications
        </label>
      </div>

      <NavigationButtons onBack={onBack} onNext={onNext} />
    </form>
  );
};

export default PreferencesForm;