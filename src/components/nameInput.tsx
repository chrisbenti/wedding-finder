import Select, { ActionMeta, SingleValue } from "react-select";
import styled from "@emotion/styled";
import { Individual } from "../model/familyGraph";
import { COLORS, GRAY_RANGE } from "../colors";

const SearchFilterContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  color: #000;
`;

type SelectOption = { value: string; label: string };

export const NameInput = ({
  names,
  placeholder,
  setName,
}: {
  names: Individual[];
  placeholder?: string;
  setName: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const options = [
    ...names.map((d) => {
      return {
        value: d.name,
        label: d.name,
      };
    }),
  ];

  const customStyle = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: `1px solid ${GRAY_RANGE[300]}`,
      color: state.isSelected ? GRAY_RANGE[900] : GRAY_RANGE[900],
      backgroundColor: state.isSelected ? GRAY_RANGE[200] : GRAY_RANGE[100],
      padding: "0.75rem 1rem",
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: COLORS.BLUE,
      border: `1px solid ${GRAY_RANGE[200]}`,
    }),
    menuList: (provided: any, state: any) => ({
      ...provided,
      padding: 0,
      border: `1px solid ${GRAY_RANGE[300]}`,
    }),
    valueContainer: (provided: any, state: any) => ({
      ...provided,
      padding: "0.25rem 1rem",
    }),
  };

  return (
    <SearchFilterContainer>
      <Select
        name="filters"
        options={options}
        className="select"
        classNamePrefix="select"
        placeholder={placeholder}
        styles={customStyle}
        onChange={(
          newValue: SingleValue<SelectOption>,
          actionMeta: ActionMeta<SelectOption>
        ) => {
          setName(newValue?.value);
        }}
      />
    </SearchFilterContainer>
  );
};
