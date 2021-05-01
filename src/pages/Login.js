import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Section from "../components/Section/Section";
import Loader from "react-loader-spinner";
import Button from "../components/Button/Button";
import {
  Form,
  FormRow,
  CheckBoxWrapper,
  InputLabel,
  InputText,
  TextArea,
  InputCheckbox,
  InputError,
  Center,
} from "../lib/style/generalStyles";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email adress")
        .required("Your email is required!"),
      password: Yup.string()
        .min(8, "Password must contain at least 8 characters")
        .required("Password is required"),
    }),

    onSubmit: (values) => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        alert(JSON.stringify(values));
      }, 2000);
    },
  });
  return (
    <>
      <Section>
        <Center>
          {!isLoading ? (
            <Form onSubmit={formik.handleSubmit}>
              <FormRow>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputText
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <InputError>{formik.errors.email}</InputError>
                ) : null}
              </FormRow>
              <FormRow>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputText
                  id="password"
                  type="text"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <InputError>{formik.errors.password}</InputError>
                ) : null}
              </FormRow>
              <Button text="Login" />
            </Form>
          ) : (
            <Loader type="TailSpin" color="#e4b43c" height={100} width={100} />
          )}
        </Center>
      </Section>
    </>
  );
};

export default Login;
