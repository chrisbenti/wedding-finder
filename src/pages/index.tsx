import { downloadFamilyData, computePath } from "../model/familyDataGetter";

export const Index = () => {
  return (
    <>
      <h1> Welcome </h1>
      <button onClick={downloadFamilyData}>RUN THING</button>
      <br />
      <button onClick={computePath}>COMPUTE PATH</button>
    </>
  );
};
