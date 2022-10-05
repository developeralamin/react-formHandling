import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Select from "react-select";
import { useForm } from "react-hook-form";
import getEmailValidationPattern from "../../utils/Pattern";
// import { RHFInput } from "react-hook-form-input";

const Contact = ({ label = "Contact Us" }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReasons] = useState("");
  const [message, setMessage] = useState("");
  const [checkbox, setCheckbox] = useState("");

  const reasons = [
    { value: "account_inactive", label: "Account Inactive" },
    { value: "account_active", label: "Account Active" },
    { value: "account_ban", label: "Acccount Ban" },
    { value: "Others", label: "Others" },
  ];

  const changeInput = (stateName, stateValue) => {
    switch (stateName) {
      case "subject":
        setSubject(stateValue);
        break;
      case "name":
        setName(stateValue);
        break;
      case "email":
        setEmail(stateValue);
        break;
      case "reason":
        setReasons(stateValue);
        break;
      case "message":
        setMessage(stateValue);
        break;
      case "checkbox":
        setCheckbox(stateValue);
        break;

      default:
        break;
    }
  };

  console.log(subject, name, email, reason, message, checkbox);

  const onSubmit = () => {
    alert("Submitted Successsfully");
    //Form submit here
    /* axios.post("https://test.com").then((res) => {
      console.log(res);
    }); */
  };

  console.log("errors", errors);

  return (
    <>
      <Form
        className="card card-body p-5 m-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-4"> {label}</h1>

        <Form.Group className="mb-3" controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter subject"
            onChange={(e) => changeInput("subject", e.target.value)}
            className={errors.subject && "is-invalid"}
            {...register("subject", {
              required: true,
              minLength: 5,
              maxLength: 50,
            })}
          />
          {errors.subject && (
            <span className="text-danger">
              {errors.subject.type === "required" && "Please give subject"}
              {errors.subject.type === "minLength" &&
                "Please give subject minimum 5 character"}
              {errors.subject.type === "maxLength" &&
                "Please give subject maximum 50 character"}
            </span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => changeInput("name", e.target.value)}
            className={errors.name && "is-invalid"}
            {...register("name", {
              required: true,
              minLength: 5,
              maxLength: 50,
            })}
          />
          {errors.name && (
            <span className="text-danger">
              {errors.name.type === "required" && "Please give name"}
              {errors.name.type === "minLength" &&
                "Please give name minimum 5 character"}
              {errors.name.type === "maxLength" &&
                "Please give name maximum 50 character"}
            </span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => changeInput("email", e.target.value)}
            className={errors.email && "is-invalid"}
            {...register("email", {
              required: true,
              pattern: getEmailValidationPattern(),
            })}
          />

          {errors.email && (
            <span className="text-danger">
              {errors.email.type === "required" && "Please give email"}
              {errors.email.type === "pattern" && "Please give a valid email"}
            </span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="reason">
          <Form.Label>Reasons</Form.Label>
          <Select
            options={reasons}
            isClearable={true}
            isDisabled={false}
            isLoading={false}
            isSearchable={true}
            onChange={(value) => changeInput("reason", value)}
          />
          {/*  <RHFInput
            as={
              <Select
                options={reasons}
                isSearchable={true}
                isClearable={true}
              />
            }
            rules={{ required: true }}
            name="reasons"
            onChange={(value) => changeInput("reason", value)}
            register={() =>
              register("reasons", {
                required: true,
              })
            }
            setValue={setValue}
          />
          {errors.reasons && (
            <span className="text-danger">
              {errors.reasons.type === "required" && "Please Select reasons "}
            </span>
          )} */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Enter Message"
            onChange={(e) => changeInput("message", e.target.value)}
            className={errors.message && "is-invalid"}
            {...register("message", {
              required: true,
              minLength: 5,
              maxLength: 50,
            })}
          />
          {errors.message && (
            <span className="text-danger">
              {errors.message.type === "required" && "Please give message"}
              {errors.message.type === "minLength" &&
                "Please give message minimum 5 character"}
              {errors.message.type === "maxLength" &&
                "Please give message maximum 50 character"}
            </span>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="checkbox">
          <Form.Check
            type="checkbox"
            label="Read Terms and Service"
            onChange={(e) => changeInput("checkbox", checkbox ? false : true)}
            className={errors.checkbox && "is-invalid"}
            {...register("checkbox", {
              required: true,
            })}
          />
          {errors.checkbox && (
            <span className="text-danger">
              {errors.checkbox.type === "required" &&
                "Please read terms & conditions"}
            </span>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          <i className="fa fa-send"></i>Submit
        </Button>
      </Form>
    </>
  );
};

export default Contact;
