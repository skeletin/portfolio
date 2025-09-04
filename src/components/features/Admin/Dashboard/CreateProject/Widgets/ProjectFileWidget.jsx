const ProjectFileWidget = (props) => {
  const { ref, onChange } = props;
  return (
    <input
      onChange={(e) => onChange(e.target.files[0])}
      ref={ref}
      type="file"
      className="invisible h-0 w-0"
    />
  );
};

export default ProjectFileWidget;
