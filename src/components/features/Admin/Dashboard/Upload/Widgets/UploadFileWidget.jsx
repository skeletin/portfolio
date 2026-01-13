const UploadFileWidget = (props) => {
  const { ref, onChange } = props;
  return (
    <input
      onChange={(e) => onChange(e.target.files[0] || null)}
      ref={ref}
      type="file"
      className="invisible h-0 w-0"
      accept="*/*"
    />
  );
};

export default UploadFileWidget;
