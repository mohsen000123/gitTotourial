import {
  LoginFormValuesInterface,
  PhoenVerifyFormValuesInterface,
} from "@/app/components/contracts";
import callApi from "@/app/helpers/callApi";
import ValidationError from "@/app/exceptions/validationError";
import innerPhoneVerify from "@/app/components/auth/innerPhoneVerifyForm";

import { withFormik } from "formik";
import * as yup from "yup";
import Router from "next/router";

interface PhoneVerifyProps {
  token?: string;
  clearToken: () => void;
}
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
      token: props.token || "",
    };
  },
  validationSchema: PhoneVerifyValidationSchema,
  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/auth/login/verify-phone", values);
      if (res.status === 200) {
        await Router.push("/");
        props.clearToken();
      }
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
