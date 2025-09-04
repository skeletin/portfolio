const ProjectTextAreaWidget = (props) => {
  const {
    id,
    formData,
    required,
    disabled,
    readonly,
    placeholder,
    autofocus,
    onChange,
    onBlur,
    onFocus,
  } = props;

  return (
    <textarea
      id={id}
      className="w-full rounded border border-gray-600 bg-transpartent text-gray-200 px-3 py-2 focus:outline-none text-sm resize-none"
      value={formData || ""}
      required={required}
      disabled={disabled || readonly}
      placeholder={placeholder}
      autoFocus={autofocus}
      rows={5}
      onChange={(e) => onChange(e.target.value)}
      onBlur={(e) => onBlur(id, e.target.value)}
      onFocus={(e) => onFocus(id, e.target.value)}
    />
  );
};

export default ProjectTextAreaWidget;
