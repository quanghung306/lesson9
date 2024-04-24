import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "reactstrap";
import FormField from "../components/FormField";
import { useAppContext } from "../contexts/AppContainer.context";

const FormContainer = () => {
  const appContext = useAppContext();
  const { onSubmitData, onUpdateData, editInfoData } = appContext;

  const [formValues, setFormValues] = useState({
    emailValue: "",
    passwordValue: "",
    addressValue: "",
    phoneNumber: "",
    firstNameValue: "",
    lastNameValue: "",
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
      const { firstName, lastName, email, phoneNumber, password, address } =
        editInfoData;
      setFormValues((previousState) => {
        return {
          ...previousState,
          firstNameValue: firstName,
          lastNameValue: lastName,
          emailValue: email,
          phoneNumber: phoneNumber,
          passwordValue: password,
          addressValue: address,
        };
      });
    } else {
      setFormValues(() => {
        return {
          firstNameValue: "",
          lastNameValue: "",
          emailValue: "",
          phoneNumber: "",
          passwordValue: "",
          addressValue: "",
        };
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
      first_name: formValues.firstName,
      last_name: formValues.lastName,
      email: formValues.emailValue,
      password: formValues.passwordValue,
      street: formValues.addressValue,
      phone: formValues.phoneNumber,
    };

    onSubmitData(object);
  };

  //   const onUpdate = (e) => {
  //     e.preventDefault();

  //     if (isNaN(formValues.phoneNumber)) {
  //       alert("Please enter a valid phone number");
  //       return;
  //     }

  //     const object = {
  //       id: editInfoData?.id,
  //       first_name: formValues.firstName,
  //       last_name: formValues.lastName,
  //       email: formValues.emailValue,
  //       password: formValues.passwordValue,
  //       street: formValues.addressValue,
  //       phone: formValues.phoneNumber,
  //     };

  //     onUpdateData(object);
  //   };

  return (
    //  <Form onSubmit={editInfoData ? onUpdate : onSubmit}>
    <Form onSubmit={onSubmit}>
      <Row>
        <FormField
          name="firstNameValue"
          placeholder="firstName placeholder"
          label="firstName"
          type="text"
          value={formValues.firstNameValue}
          onChange={onFormChange}
        />
        <FormField
          name="lastNameValue"
          placeholder="lastName placeholder"
          label="lastName"
          type="text"
          value={formValues.lastNameValue}
          onChange={onFormChange}
        />
        <FormField
          name="emailValue"
          placeholder="Email placeholder"
          label="Email"
          type="email"
          value={formValues.emailValue}
          onChange={onFormChange}
        />
        {/* <FormField
          name="passwordValue"
          placeholder="Password placeholder"
          label="Password"
          type="password"
          value={formValues.passwordValue}
          onChange={onFormChange}
        /> */}
      </Row>
      <FormField
        name="phoneNumber"
        placeholder="PhoneNumber placeholder"
        label="phone"
        type="text"
        value={formValues.phoneNumber}
        onChange={onFormChange}
      />
      <FormField
        name="addressValue"
        placeholder="Address placeholder"
        label="street"
        type="text"
        value={formValues.addressValue}
        onChange={onFormChange}
      />
      <Button type="submit" color="primary">
        Create
      </Button>
    </Form>
  );
};

export default FormContainer;
