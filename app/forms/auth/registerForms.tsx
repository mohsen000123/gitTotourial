import InnerRegisterForm from "@/app/components/auth/innerRegisterForm";
import { RegisterFormValuesInterface } from "@/app/components/contracts";
import ValidationError from "@/app/exceptions/validationError";
import callApi from "@/app/helpers/callApi";

import { withFormik } from "formik";
import Router from "next/router";
import * as yup from "yup";

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;

interface RegisterFormProps {}
const registerFormValidationSchema = yup.object().shape({
  name: yup.string().required().min(4),
  phone: yup
    .string()
    .required()
    .min(8)
    .matches(phoneRegExp, "the phone format is not correct"),
});
const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>(
  {
    mapPropsToValues: (props) => {
      return {
        name: "",
        phone: "",
      };
    },
    validationSchema: registerFormValidationSchema,
    handleSubmit: async (values, { setFieldError }) => {
      try {
        const res = await callApi().post("/auth/register", values);
        if (res.status === 201) {
          Router.push("/auth/login");
        }
      } catch (err) {
        if (err instanceof ValidationError) {
          Object.entries(err.messages).forEach(([key, value]) =>
            setFieldError(key, value as string)
          );
        }
        console.log(err);
      }
    },
  }
)(InnerRegisterForm);
export default RegisterForm;
