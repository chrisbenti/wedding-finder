export interface Individual {
  individual_id: string;
  name: string;
  facebook_url: string;
}

export interface RelationRaw {
  edge_id: string;
  name_source: string;
  name_target: string;
  relationship: string;
}

export const RelationKeyInverses: { [key: string]: string | undefined } = {
  "child-of": "parent-of",
  "married-to": "married-to",
  "friend-of": "friend-of",
  "step-child-of": "step-parent-of",
};
