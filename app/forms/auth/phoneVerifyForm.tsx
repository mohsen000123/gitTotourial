import {
  LoginFormValuesInterface,
  PhoenVerifyFormValuesInterface,
} from "@/app/components/contracts";
import callApi from "@/app/helpers/callApi";
import ValidationError from "@/app/exceptions/validationError";
import innerPhoneVerify from "@/app/components/auth/innerPhoneVerifyForm";

import { withFormik } from "formik";
import * as yup from "yup";

interface PhoneVerifyProps {}
const PhoneVerifyValidationSchema = yup.object().shape({
  code: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "please just number")
    .length(6),
});
const PhoneVerifyForm = withFormik<
  PhoneVerifyProps,
  PhoenVerifyFormValuesInterface
>({
  mapPropsToValues: (props) => {
    return {
      code: "",
      token: "4c6216a6-b8b1-48e7-8591-2a131ec368c2",
    };
  },
  validationSchema: PhoneVerifyValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login/verify-phone", values);
      console.log(res);
    } catch (err) {
      if (err instanceof ValidationError) {
        Object.entries(err.messages).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
      }
    }
  },
})(innerPhoneVerify);
export default PhoneVerifyForm;
