import {
  useState
} from "react";

import API from "../api/axios";

const UploadModel = ({
  fetchModels
}) => {
  const [file, setFile] =
    useState(null);

  const uploadFile = async () => {
    const formData =
      new FormData();

    formData.append(
      "model",
      file
    );

    await API.post(
      "/models/upload",
      formData
    );

    fetchModels();
  };

  return (
    <div className="mb-4">
      <input
        type="file"
        accept=".glb"
        onChange={(e) =>
          setFile(
            e.target.files[0]
          )
        }
      />

      <button
        onClick={uploadFile}
        className="bg-blue-500 text-white px-4 py-2 ml-2"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadModel;