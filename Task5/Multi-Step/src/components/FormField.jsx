const FormField = ({
  label,
  name,
  type = "text",
  register,
  error,
  options,
  placeholder,
}) => {
  return (
    <>
      <div className="form-filed">
        <label htmlFor={name}>{label}</label>

        {options ? (
          <select id={name} {...register}>
            <option value="">-- Select --</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={name}
            type={type}
            placeholder={placeholder || `Enter ${label.toLowerCase()}`}
            {...register}
          />
        )}

        {error && <span className="error-msg">⚠ {error.message}</span>}
      </div>
    </>
  );
};

export default FormField;
