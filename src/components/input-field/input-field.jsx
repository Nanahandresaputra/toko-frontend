const InputField = ({ label, type, style, placeholder, errorMessage, register, regName }) => {
  return (
    <label className="flex flex-col space-y-3 my-3">
      <span className="text-lg font-semibold">
        {label} <span className="text-red-500">*</span>
      </span>
      <input type={type} placeholder={placeholder} className={style} {...register(regName)} />
      <span className="text-red-500">{errorMessage}</span>
    </label>
  );
};

export default InputField;
