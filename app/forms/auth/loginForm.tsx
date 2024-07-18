import InnerloginForm from "@/app/components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "@/app/components/contracts";
import callApi from "@/app/helpers/callApi";

import { withFormik } from "formik";
import * as yup from "yup";
import Router from "next/router";
import ValidationError from "@/app/exceptions/validationError";

const phoneRegExp = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;

interface LoginFormProps {
  setToken: (token: string) => void;
}
const loginFormValidationSchema = yup.object().shape({
  phone: yup
    .string()
    .required()
    .min(8)
    .matches(phoneRegExp, "the phone format is not correct"),
});
const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => {
    return {
      phone: "",
    };
  },
  validationSchema: loginFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login", values);
      if (res.status === 200) {
        props.setToken(res.data.token);
        console.log(res);
        
        Router.push("/auth/login/step-two");
      }
    } catch (err) {
      if (err instanceof ValidationError) {
        Object.entries(err.messages).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
      }
    }
  },
})(InnerloginForm);
export default LoginForm;
