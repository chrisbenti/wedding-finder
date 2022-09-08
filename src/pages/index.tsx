import { useState, useCallback, useEffect } from "react";
import { computePath } from "../model/familyDataGetter";
import { familyGraph, RelationshipPath } from "../model/familyGraph";
import { Relation } from "../model/familyGraph";

import styled from "@emotion/styled";
import { useBackgroundColor, useBodyColor } from "../hooks/useBackgroundColor";

import { Navigation } from "../components/navbar";
import { NameInput } from "../components/nameInput";
import { GRAY_RANGE } from "../colors";

const LINE_COLOR = "green";
const FACE_SIZE_PX = 40;
const NodeBox = styled.div``;

const NodePerson = styled.div`
  display: flex;
  align-items: center;
`;

const LINE_WIDTH_PX = 4;
const NodeRelationship = styled.div`
  text-align: center;
  border-left: solid ${LINE_WIDTH_PX}px ${LINE_COLOR};

  // This math is to make it so that the vertical line
  // is centered to the face circle.
  // FACE_TOTAL_SIZE / 2 + L/2 from the left
  // where FACE_TOTAL_SIZE = FACE_SIZE + LINE_WIDTH * 2
  // tl;dr it's centered by the power of geometry
  margin: 0 ${(FACE_SIZE_PX + LINE_WIDTH_PX) / 2}px;

  padding: 0 2rem 1rem;

  font-size: 1.1rem;
`;

const Face = styled.div`
  height: ${FACE_SIZE_PX}px;
  width: ${FACE_SIZE_PX}px;
  border: solid ${LINE_WIDTH_PX}px ${LINE_COLOR};
  border-radius: 100%;
  margin-right: 0.5rem;
`;
const Node = ({ relation: r }: { relation: Relation }) => (
  <NodeBox>
    <NodePerson>
      <Face />
      <div>{r.sourceName}</div>
    </NodePerson>
    <NodeRelationship>
      is the {r.relationship.replace("-", " ")}
    </NodeRelationship>
  </NodeBox>
);

const TerminalNode = ({ relation: r }: { relation: Relation }) => (
  <NodeBox>
    <NodePerson>
      <Face />
      <div>{r.targetName}</div>
    </NodePerson>
  </NodeBox>
);

const Results = ({ path }: { path: RelationshipPath }) => (
  <div>
    {path.relations.map((elem) => (
      <Node relation={elem} />
    ))}
    <TerminalNode relation={path.relations.at(-1)!} />
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
