import { RelationshipPath } from "../model/familyGraph";
import { Relation, Individual } from "../model/familyGraph";
import { Relationship, IdentityRelationship, PrimaryRelationship, SecondaryRelationship } from "../model/csvGraph";
import styled from "@emotion/styled";
import { COLORS } from "../colors";
import { keyframes } from "@emotion/css";

const LINE_COLOR = COLORS.GREEN;
const FACE_SIZE_PX = 40;
const NodeBox = styled.div``;
const NodePerson = styled.div`
  display: flex;
  align-items: center;
`;
const LINE_WIDTH_PX = 4;
const CIRCLE_BORDER_PX = 2;
const NodeRelationship = styled.div`
  text-align: center;
  border-left: solid ${LINE_WIDTH_PX}px ${LINE_COLOR};

  // This math is to make it so that the vertical line
  // is centered to the face circle.
  // THE POWER OF GEOMETRY
  margin: 0 ${(FACE_SIZE_PX + CIRCLE_BORDER_PX * 2) / 2 - LINE_WIDTH_PX / 2}px;

  padding: 0.5rem 0 0.5rem 2rem;

  font-size: 1.1rem;
`;
const Face = styled.div`
  height: ${FACE_SIZE_PX}px;
  width: ${FACE_SIZE_PX}px;
  border: solid ${CIRCLE_BORDER_PX}px ${LINE_COLOR};
  border-radius: 100%;
  margin-right: 0.5rem;
`;
const HumanReadableRelationship: {
  [key in Relationship]: string;
} = {
  [PrimaryRelationship.CHILD_OF]: "is a child of",
  [SecondaryRelationship.PARENT_OF]: "is a parent of",
  [IdentityRelationship.MARRIED_TO]: "is married to",
  [IdentityRelationship.FRIEND_OF]: "is a friend of",
  [PrimaryRelationship.STEP_CHILD_OF]: "is a step-child of",
  [SecondaryRelationship.STEP_PARENT_OF]: "is a step-parent of",
  [IdentityRelationship.SIBLING_OF]: "is a sibling of",
  [IdentityRelationship.WORK_FRIEND_OF]: "is a work friend of",
  [IdentityRelationship.PLUS_ONE_OF]: "is a plus one of"
};
const shimmer = keyframes`
  0% {
      background-position: -400% 0;
  }
  50%, 100% {
      background-position: 400% 0;
  }
`;
const SpecialName = styled.div`
  color: rgba(255, 255, 255, 0.1);
  text-align: center;

  // Configure the HSL 3rd variable to make greyer or whiter
  // 0% black
  // 100% white
  background: linear-gradient(to right, black 10%, #ffd700 50%, black 90%);

  background-size: 125px 100%;
  background-clip: text;

  animation: ${shimmer} 3s ease-in-out infinite;
  background-repeat: no-repeat;
  background-position: 0 0;
  background-color: #222;
`;
const Name = ({ name, person }: { name: string; person: Individual }) => (
  <div>{person.important ? <SpecialName>{name}</SpecialName> : name}</div>
);
const Node = ({ relation: r, people: p }: { relation: Relation; people: { [key: string]: Individual } }) => (
  <NodeBox>
    <NodePerson>
      <Face />
      <div>
        <Name name={r.sourceName} person={p[r.sourceName]} />
      </div>
    </NodePerson>
    <NodeRelationship>{HumanReadableRelationship[r.relationship]}</NodeRelationship>
  </NodeBox>
);
const TerminalNode = ({ relation: r, people: p }: { relation: Relation; people: { [key: string]: Individual } }) => (
  <NodeBox>
    <NodePerson>
      <Face />
      <div>
        <Name name={r.targetName} person={p[r.targetName]} />
      </div>
    </NodePerson>
  </NodeBox>
);
export const Results = ({ path }: { path: RelationshipPath }) => (
  <div>
    {path.relations.map((elem) => (
      <Node
        key={[elem.sourceName, elem.relationship, elem.targetName].join(".")}
        relation={elem}
        people={path.individuals}
      />
    ))}
    <TerminalNode relation={path.relations.at(-1)!} people={path.individuals} />
  </div>
);
