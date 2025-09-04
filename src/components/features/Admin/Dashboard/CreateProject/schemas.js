import ProjectStringField from "./Fields/ProjectStringField";
import ProjectArrayField from "./Fields/ProjectArrayField";
import stackOptions from "../../../../data/technologyStack";
import ProjectFileField from "./Fields/ProjectFileField";

export const projectSchema = {
  type: "object",
  properties: {
    name: {
      description: "The name of the project",
      type: "string",
      title: "Name",
    },
    repoUrl: {
      description: "The link of the project's repository",
      type: "string",
      title: "Repo Url",
    },
    siteUrl: {
      description: "The link of the project's production site",
      type: "string",
      title: "Site Url",
    },
    techStack: {
      description: "The technology used to build the project",
      type: "array",
      title: "Tech Stack",
      items: { type: "string" },
      minItems: 1,
      uniqueItems: true,
    },
    year: {
      description: "The year the project was made",
      type: "string",
      title: "Year",
    },
    description: {
      description: "The description about the project and it's capabilities",
      type: "string",
      title: "Description",
    },
    displayPicture: {
      description: "A display picture for the project",
      type: "object",
      title: "Display Picture",
    },
  },
  required: ["name", "techStack", "year", "description", "displayPicture"],
  additionalProperties: false,
};

export const uiSchema = {
  name: {
    "ui:autofocus": true,
    "ui:field": ProjectStringField,
  },
  repoUrl: {
    "ui:field": ProjectStringField,
  },
  siteUrl: {
    "ui:field": ProjectStringField,
  },
  techStack: {
    "ui:field": ProjectArrayField,
    "ui:options": {
      stackOptions,
    },
  },
  year: {
    "ui:field": ProjectStringField,
  },
  description: {
    "ui:field": ProjectStringField,
    "ui:options": {
      multiline: true,
    },
  },
  displayPicture: {
    "ui:field": ProjectFileField,
  },
  "ui:submitButtonOptions": {
    props: {
      className:
        "w-full bg-transparent rounded font-bold text-sm py-2 border border-gray-700 shadow-md shadow-gray-800 transition duration-400 hover:bg-gray-900 hover:shadow",
    },
    submitText: "Create Project",
  },
};
