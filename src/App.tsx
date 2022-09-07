import { Index } from "./pages/index";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { downloadFamilyData } from "./model/familyDataGetter";

export const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const asyncEffect = async () => {
      await downloadFamilyData();
      setDataLoaded(true);
    };

    asyncEffect();
  }, [setDataLoaded]);

  return dataLoaded ? (
    <HashRouter>
      <Routes>
        <Route index element={<Index />} />
      </Routes>
    </HashRouter>
  ) : (
    <h1>LOADING</h1>
  );
};
