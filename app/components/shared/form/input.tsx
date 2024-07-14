import { ErrorMessage, Field } from "formik";
import { FC } from "react";

interface InputProps {
  name: string;
  type?: string;
  lable: string;
  lableClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
}

const Input: FC<InputProps> = ({
  name,
  type = "text",
  lable,
  lableClassName,
  inputClassName,
  errorClassName,
}) => {
  return (
    <>
      <Field
        name={name}
        id={name}
        type={type}
        className={`border-2 peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 ${
          inputClassName ?? ""
        }`}
      />

      <label
        htmlFor={name}
        className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[1.15rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary ${
          lableClassName ?? ""
        }`}
      >
        {lable}
      </label>
      <ErrorMessage
        name={name}
        className={`text-red-500 text-sm ${errorClassName ?? ""}`}
        component="div"
      />
    </>
  );
};

export default Input;
