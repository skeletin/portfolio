import { CgClose } from "react-icons/cg";

const Chip = ({ content, removeHandler }) => {
  return (
    <div
      type="button"
      key={content}
      className="flex space-x-1 items-center rounded-full px-3 py-1 bg-gray-800 shadow-sm shadow-gray-700 mb-2"
    >
      <span>{content}</span>
      <button type="button" onClick={() => removeHandler(content)}>
        <CgClose className="text-xs hover:text-blue-500" />
      </button>
    </div>
  );
};

export default Chip;
