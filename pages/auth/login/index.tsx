import { NextPage } from "next";

import LoginForm from "../../../app/forms/auth/loginForm";
import { useCookies } from "react-cookie";
import { useAppDispatch } from "@/app/hooks";
import { UpdatePhoneVerifyToken } from "@/app/store/auth";

const login: NextPage = () => {
  const displatch = useAppDispatch();
  const setPhoneVerifyToken = (token: string) => {
    displatch(UpdatePhoneVerifyToken(token));
  };
  return (
    <>
      <section className="h-screen">
        <div className="container h-full px-6 py-24">
          <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 lg:ms-6 lg:w-5/12">
              <LoginForm setToken={setPhoneVerifyToken} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default login;
