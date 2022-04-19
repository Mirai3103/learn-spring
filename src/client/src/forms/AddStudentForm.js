import React from "react";
import { Formik } from "formik";
import { Alert, Button, Input, Select } from "antd";
import { addStudent } from "../callApi";

export default function AddStudentForm() {
  return (
    <Formik
      initialValues={{ fullName: "", email: "", gender: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        addStudent(values).then((res) => {
          console.log(res);
          setSubmitting(false);
            console.log(JSON.stringify(values))
        });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        submitForm,
        isValid,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="fullName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.fullName}
            placeholder="Full name"
          />
          {errors.email && touched.email && errors.email}
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="Email"
          />
          <Input
            type="text"
            name="gender"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.gender}
            placeholder="Gender"
          />
          {/* <Select
            defaultValue=""
            name="gender"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.gender}
            style={{ width: 320 }}
            allowClear
          >
            <Select.Option value="">Select gender</Select.Option>
            <Select.Option value="MALE">Male</Select.Option>
            <Select.Option value="FEMALE">Female</Select.Option>
          </Select> */}
          <Button
            onClick={submitForm}
            type="submit"
            disabled={isSubmitting | (touched && !isValid)}
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
}
