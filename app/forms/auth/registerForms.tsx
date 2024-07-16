import InnerRegisterForm from "@/app/components/auth/innerRegisterForm";
import { RegisterFormValuesInterface } from "@/app/components/contracts";

import { withFormik } from "formik";
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
    handleSubmit: (values) => {
      console.log(values);
    },
  }
)(InnerRegisterForm);
export default RegisterForm;
