import React, { useEffect, useState } from "react";
import { Button, Form, Row } from "reactstrap";
import FormField from "../components/FormField";
import { useAppContext } from "../contexts/AppContainer.context";
import SelectForm from "../components/SelectForm";
import PositionForm from "../components/PositionForm";
const options = [
  {
    label: "Dev",
    value: "Dev",
  },
  {
    label: "Director",
    value: "Director",
  },
  {
    label: "Person",
    value: "Person",
  },
];
const option = [
  {
    label: "money",
    value: "money",
  },
  {
    label: "cash",
    value: "cash",
  },
  {
    label: "card",
    value: "card",
  },
];

const FormContainer = ({ editInfoData }) => {
  
  const { onSubmitData, onUpdateData } = useAppContext();

  const [formValues, setFormValues] = useState({
    emailValue: "",
    passwordValue: "",
    addressValue: "",
    phoneNumber: "",
    firstNameValue: "",
    lastNameValue: "",
    selectValue: "",
    PositionValue:"",
  });

  const onFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    if (editInfoData) {
      const {
        first_name,
        last_name,
        email,
        phone,
        password,
        street,
        department,
        Position,
      } = editInfoData;
      setFormValues({
        firstNameValue: first_name,
        lastNameValue: last_name,
        emailValue: email,
        phoneNumber: phone,
        passwordValue: password,
        addressValue: street,
        selectValue: department,
        PositionValue:Position,
      });
    } else {
      setFormValues({
        firstNameValue: "",
        lastNameValue: "",
        emailValue: "",
        phoneNumber: "",
        passwordValue: "",
        addressValue: "",
        selectValue: "",
        PositionValue:"",
      });
    }
  }, [editInfoData]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (isNaN(formValues.phoneNumber)) {
      alert("Please enter a valid phone number");
      return;
    }

    const object = {
      id: Math.random(),
      first_name: formValues.firstNameValue,
      last_name: formValues.lastNameValue,
      email: formValues.emailValue,
      password: formValues.passwordValue,
      street: formValues.addressValue,
      phone: formValues.phoneNumber,
      department: formValues.selectValue,
      Position:formValues.PositionValue,
    };
    onSubmitData(object);
  };

  const onUpdate = (e) => {
    e.preventDefault();
    const object = {
      id: editInfoData?.id,
      first_name: formValues.firstNameValue,
      last_name: formValues.lastNameValue,
      email: formValues.emailValue,
      password: formValues.passwordValue,
      street: formValues.addressValue,
      phone: formValues.phoneNumber,
      department: formValues.selectValue,
      Position:formValues.PositionValue,
    };
    onUpdateData(object);
  };
  return (
    <Form onSubmit={editInfoData ? onUpdate : onSubmit}>
      <Row>
        <FormField
          name="firstNameValue"
          placeholder="First Name"
          label="First Name"
          type="text"
          value={formValues.firstNameValue}
          onChange={onFormChange}
        />
        <FormField
          name="lastNameValue"
          placeholder="Last Name"
          label="Last Name"
          type="text"
          value={formValues.lastNameValue}
          onChange={onFormChange}
        />
        <FormField
          name="emailValue"
          placeholder="Email"
          label="Email"
          type="email"
          value={formValues.emailValue}
          onChange={onFormChange}
        />
      </Row>
      <SelectForm
        name="selectValue"
        label="department"
        value={formValues.selectValue}
        onChange={onFormChange}
        options={options}
      />
      <PositionForm
        name="PositionValue"
        label="Position"
        value={formValues.PositionValue}
        onChange={onFormChange}
        option={option}
      />

      <FormField
        name="phoneNumber"
        placeholder="Phone Number"
        label="Phone Number"
        type="text"
        value={formValues.phoneNumber}
        onChange={onFormChange}
      />
      <FormField
        name="addressValue"
        placeholder="Address"
        label="Address"
        type="text"
        value={formValues.addressValue}
        onChange={onFormChange}
      />
      <Button type="submit" color="primary">
        {editInfoData ? "Update" : "Add New"}
      </Button>
    </Form>
  );
};

export default FormContainer;
