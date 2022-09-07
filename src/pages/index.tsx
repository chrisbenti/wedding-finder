import { doSheetWork } from "../model/googleApi";

export const Index = () => {
  return (
    <>
      <h1> Welcome </h1>
      <button onClick={doSheetWork}>RUN THING</button>
    </>
  );
};
