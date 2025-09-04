const ProjectTextWidget = (props) => {
  const {
    idSchema,
    required,
    disabled,
    readonly,
    placeholder,
    autofocus,
    onChange,
    onBlur,
    onFocus,
    formData,
  } = props;

  return (
    <input
      id={idSchema.$id}
      type="text"
      className="w-full rounded border border-gray-600 bg-transparent text-gray-200 px-3 py-2 focus:outline-none"
      value={formData || ""}
      required={required}
      disabled={disabled || readonly}
      placeholder={placeholder}
      autoFocus={autofocus}
      onChange={(e) => onChange(e.target.value)}
      onBlur={(e) => onBlur(idSchema.$id, e.target.value)}
      onFocus={(e) => onFocus(idSchema.$id, e.target.value)}
    />
  );
};

export default ProjectTextWidget;
