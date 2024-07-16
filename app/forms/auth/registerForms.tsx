import InnerRegisterForm from "@/app/components/auth/innerRegisterForm";
import { RegisterFormValuesInterface } from "@/app/components/contracts";
import callApi from "@/app/helpers/callApi";

import { withFormik } from "formik";
import Router from "next/router";
import * as yup from "yup";

interface RegisterFormProps {}
const registerFormValidationSchema = yup.object().shape({
  name: yup.string().required().min(4),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>(
  {
    mapPropsToValues: (props) => {
      return {
        name: "",
        email: "",
        password: "",
      };
    },
    validationSchema: registerFormValidationSchema,
    handleSubmit: async (values) => {
      try {
        const res = await callApi().post("/auth/register", values);
        if (res.status === 201) {
          Router.push("/auth/login");
        }
      } catch (err) {
        console.log(err);
      }
    },
  }
)(InnerRegisterForm);
export default RegisterForm;
