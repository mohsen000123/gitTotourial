import InnerloginForm from "@/app/components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "@/app/components/contracts";
import {  withFormik } from "formik";
import * as yup from "yup";

interface LoginFormProps {}
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
  handleSubmit: (values) => {
    console.log(values);
  },
})(InnerloginForm);
export default LoginForm;
