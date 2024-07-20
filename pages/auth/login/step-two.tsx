import { NextPage } from "next";
import { useEffect } from "react";
import Router from "next/router";

import PhoneVerifyForm from "../../../app/forms/auth/phoneVerifyForm";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  selectPhoneVerifyToken,
  UpdatePhoneVerifyToken,
} from "@/app/store/auth";
import { NextPageWithLayout } from "@/pages/_app";
import GuestLayout from "@/app/components/guestPanelLayout";

const PhoneVerify: NextPageWithLayout = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectPhoneVerifyToken);

  const clearPhoneVerifyToken = () => {
    dispatch(UpdatePhoneVerifyToken(undefined));
  };

  useEffect(() => {
    Router.beforePopState(({ url, as, options }) => {
      clearPhoneVerifyToken();
      return true;
    });
    if (token === undefined) {
      Router.push("/auth/login");
    }
  }, [token]);

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
              <PhoneVerifyForm
                token={token}
                clearToken={clearPhoneVerifyToken}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

PhoneVerify.getLayout = (page) => <GuestLayout>{page}</GuestLayout>;

export default PhoneVerify;
