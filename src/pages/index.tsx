import { useState, useCallback } from "react";
import { computePath } from "../model/familyDataGetter";
import { RelationshipPath } from "../model/familyGraph";

export const Index = () => {
  const [nameA, setNameA] = useState("");
  const [nameB, setNameB] = useState("");
  const [ans, setAns] = useState<null | RelationshipPath>();

  const getAns = useCallback(() => {
    setAns(computePath(nameA, nameB));
  }, [setAns, nameA, nameB]);

  return (
    <>
      <h1> Welcome </h1>
      <input
        onChange={(e) => setNameA(e.currentTarget.value)}
        placeholder="First Person"
      />
      <input
        onChange={(e) => setNameB(e.currentTarget.value)}
        placeholder="Second Person"
      />
      <button onClick={getAns}>COMPUTE PATH</button>
      {ans && JSON.stringify(ans)}
    </>
  );
};
