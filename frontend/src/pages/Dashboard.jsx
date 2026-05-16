import {
  useEffect,
  useState
} from "react";

import API from "../api/axios";

import Navbar from "../components/Navbar";

import UploadModel from "../components/UploadModel";

import Viewer from "../components/Viewer";

const Dashboard = () => {
  const [models, setModels] =
    useState([]);

  const [selectedModel,
    setSelectedModel
  ] = useState(null);

  const fetchModels = async () => {
    const { data } =
      await API.get("/models");

    setModels(data);

    if (data.length > 0) {
      setSelectedModel(
        data[0]
      );
    }
  };

  useEffect(() => {
    fetchModels();
  }, []);

  return (
    <div>
      <Navbar />

      <div className="p-5">
        <UploadModel
          fetchModels={fetchModels}
        />

        <div className="grid grid-cols-4 gap-4">
          <div>
            {models.map((model) => (
              <div
                key={model._id}
                onClick={() =>
                  setSelectedModel(
                    model
                  )
                }
                className="border p-2 cursor-pointer mb-2 bg-white"
              >
                {model.modelName}
              </div>
            ))}
          </div>

          <div className="col-span-3">
            {selectedModel && (
              <Viewer
                modelUrl={
                  selectedModel.modelUrl
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;