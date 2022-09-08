import path from "path";
import { useState, useCallback, useEffect } from "react";
import { computePath } from "../model/familyDataGetter";
import { familyGraph, RelationshipPath } from "../model/familyGraph";
import { css } from "@emotion/react";

import styled from "@emotion/styled";
import { useBackgroundColor, useBodyColor } from "../hooks/useBackgroundColor";
import { Navigation } from "../components/navbar";
import { NameInput } from "../components/nameInput";
import { GRAY_RANGE } from "../colors";

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

  &:after {
    content: "";
    background-image: url("/img/banner.jpeg");
    background-size: cover;
    opacity: 0.6;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
  }
`;

const Frame = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const Button = styled.button`
  margin: 1rem;

  &:hover {
    border: 1px solid black;
  }
`;

export const Index = () => {
  useBackgroundColor(GRAY_RANGE[50]);
  useBodyColor(GRAY_RANGE[800]);
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
    <>
      <Navigation />
      <Content>
        <Frame>
          <h2 style={{ textAlign: "center" }}>
            Sarah and Rob's <br /> Wedding Directory
          </h2>
          <NameInput
            names={familyGraph.individuals}
            placeholder={"First Person"}
            setName={setNameA}
          />
          <NameInput
            names={familyGraph.individuals}
            placeholder={"Second Person"}
            setName={setNameB}
          />
          <Button onClick={getAns}>COMPUTE PATH</Button>
          {ans && <Results path={ans} />}
        </Frame>
      </Content>
    </>
  );
};
