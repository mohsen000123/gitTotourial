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
import { storeLoginToken } from "@/app/helpers/auth";

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
        storeLoginToken(res.data?.user?.token);
        await Router.push("/panel");
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
