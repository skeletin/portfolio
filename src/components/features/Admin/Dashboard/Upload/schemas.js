import UploadFileField from "./Fields/UploadFileField";

export const uploadSchema = {
  type: "object",
  properties: {
    file: {
      description: "Select a file to upload to Railway volume",
      type: "object",
      title: "File",
    },
  },
  required: ["file"],
  additionalProperties: false,
};

export const uiSchema = {
  file: {
    "ui:field": UploadFileField,
  },
  "ui:submitButtonOptions": {
    props: {
      className:
        "w-full bg-transparent rounded font-bold text-sm py-2 border border-gray-700 shadow-md shadow-gray-800 transition duration-400 hover:bg-gray-900 hover:shadow",
    },
    submitText: "Upload File",
  },
};
