import { computePath } from "../model/familyDataGetter";

export const Index = () => {
  return (
    <>
      <h1> Welcome </h1>
      <button onClick={computePath}>COMPUTE PATH</button>
    </>
  );
};
