import InnerloginForm from "@/app/components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "@/app/components/contracts";
import callApi from "@/app/helpers/callApi";

import { withFormik } from "formik";
import * as yup from "yup";
import Router from "next/router";
import ValidationError from "@/app/exceptions/validationError";

interface LoginFormProps {
  setCookie: any;
}
const loginFormValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
});
const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => {
    return {
      email: "",
      password: "",
    };
  },
  validationSchema: loginFormValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login", values);
      if (res.status === 200) {
        props.setCookie("shopy-token", res.data.token, {
          maxAge: 3600 * 24 * 30,
          domain: "localhost",
          path: "/",
          sameSite: "lax",
        });
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
