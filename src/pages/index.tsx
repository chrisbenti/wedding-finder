import path from "path";
import { useState, useCallback, useEffect } from "react";
import { computePath } from "../model/familyDataGetter";
import { RelationshipPath } from "../model/familyGraph";
import { css } from "@emotion/react";

import styled from "@emotion/styled";

const Results = ({ path }: { path: RelationshipPath }) => (
  <div>
    Connection
    {path.relations.map((elem) => (
      <div>
        {elem.sourceName} {elem.relationship}
      </div>
    ))}
    <div>{path.relations.at(-1)?.targetName}</div>
  </div>
);

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  margin: 1rem;

  &:hover {
    border: 1px solid black;
  }
`;

export const Index = () => {
  const [nameA, setNameA] = useState("Anthony Testa");
  const [nameB, setNameB] = useState("Sarah Bentivenga");
  const [ans, setAns] = useState<null | RelationshipPath>();

  useEffect(() => {
    getAns();
  }, []);
  const getAns = useCallback(() => {
    setAns(computePath(nameA, nameB));
  }, [setAns, nameA, nameB]);

  return (
    <Content>
      <h1> Welcome </h1>
      <input
        onChange={(e) => setNameA(e.currentTarget.value)}
        placeholder="First Person"
      />
      <input
        onChange={(e) => setNameB(e.currentTarget.value)}
        placeholder="Second Person"
      />
      <Button onClick={getAns}>COMPUTE PATH</Button>
      {ans && <Results path={ans} />}
    </Content>
  );
};
