import { createContext, useContext, useState, useCallback } from "react";

const ModelReadyContext = createContext({
  modelReady: false,
  setModelReady: () => {},
});

export const ModelReadyProvider = ({ children }) => {
  const [modelReady, setModelReady] = useState(false);
  const markReady = useCallback(() => setModelReady(true), []);

  return (
    <ModelReadyContext.Provider value={{ modelReady, setModelReady: markReady }}>
      {children}
    </ModelReadyContext.Provider>
  );
};

export const useModelReady = () => useContext(ModelReadyContext);
