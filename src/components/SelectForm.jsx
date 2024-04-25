import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const SelectForm = (props) => {
  return (
    <FormGroup>
      <Label>{props.label}</Label>
      <Input
        name={props.name}
        type="select"
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map((e) => (
          <option value={e.value} key={e.value}>
            {e.label}
          </option>
        ))}
      </Input>
    </FormGroup>
  );
};

export default SelectForm;
