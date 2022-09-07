import { downloadFamilyData } from "../model/familyDataGetter";

export const Index = () => {
  return (
    <>
      <h1> Welcome </h1>
      <button onClick={downloadFamilyData}>RUN THING</button>
    </>
  );
};
