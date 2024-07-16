import { Form, FormikProps } from "formik";
import Input from "../shared/form/input";
import { LoginFormValuesInterface } from "../contracts";

const InnerloginForm = (props: FormikProps<LoginFormValuesInterface>) => {
  return (
    <Form>
      {/* <!-- Email input --> */}
      <div className="relative mb-6" data-twe-input-wrapper-init>
        <Input name="email" type="email" lable="Email Address" />
      </div>

      {/* <!-- Password input --> */}
      <div className="relative mb-6" data-twe-input-wrapper-init>
        <Input name="password" type="password" lable="Password" />
      </div>
      {/* <!-- Submit button --> */}
      <button
        type="submit"
        className="inline-block w-full rounded bg-blue-500 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        Log in
      </button>
    </Form>
  );
};
export default InnerloginForm;
