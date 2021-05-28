import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
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
  SuccessMessage,
} from "../lib/style/generalStyles";
import { loginUser } from "../../src/api/login";
import { getAllUsers } from "../../src/api/user";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isRequestFinished, setIsRequestFinished] = useState(false);
  const { setIsAdmin, setIsLoggedIn } = useContext(AuthContext);
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

    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      setIsError(false);
      setIsRequestFinished(false);

      try {
        const response = await loginUser(values);
        const users = await getAllUsers(response.token);
        const isAdmin = users.find(
          (user) => user.email === values.email
        ).isAdmin;

        if (isAdmin) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }

        localStorage.setItem("authToken", response.token);
        localStorage.setItem("isAdmin", isAdmin);
        resetForm({});
        setIsError(false);
        setIsLoggedIn(true);

        setSuccessMessage("Logged in!");

        setTimeout(() => {
          setIsRequestFinished(false);
        }, 4000);
      } catch (error) {
        setIsError(true);
        setSuccessMessage("Something went wrong!");
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
        setIsRequestFinished(true);
      }
    },
  });
  return (
    <>
      <Section title="Login">
        <Center>
          {isRequestFinished && (
            <SuccessMessage isError={isError}>{successMessage}</SuccessMessage>
          )}
          {!isLoading ? (
            <Form onSubmit={formik.handleSubmit}>
              <FormRow marginBottom={true}>
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
              <FormRow marginBottom={true}>
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
