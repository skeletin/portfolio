import Chip from "../../../../../ui/Chip";

const ProjectChipWidget = (props) => {
  const {
    removeChip,
    idSchema,
    required,
    disabled,
    readonly,
    placeholder,
    autofocus,
    tech,
    setTech,
    techStack,
  } = props;

  return (
    <div className="flex space-x-2 items-center flex-wrap w-full py-2 px-3 rounded border border-gray-600">
      {techStack.map((tech) => (
        <Chip content={tech} key={tech} removeHandler={removeChip} />
      ))}

      <input
        id={idSchema.$id}
        type="text"
        value={tech || ""}
        className="flex-1 shrink inline  rounded bg-transparent text-gray-200 focus:outline-none"
        required={required}
        disabled={disabled || readonly}
        placeholder={placeholder}
        autoFocus={autofocus}
        onChange={(e) => setTech(e.target.value)}
      />
    </div>
  );
};

export default ProjectChipWidget;
