import {  ReactNode } from "react";
import useAuth from "../hooks/useAuth";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
}

const AdminPanelLayou = ({ children }: Props) => {
  const router = useRouter();
  const { user, error, loading } = useAuth();

  if (loading) {
    return <h1>loading ...</h1>;
  }

  if (error) {
    //show error
    router.push("/auth/login");
    return <></>;
  }
  if (!user?.is_admin) {
    router.push("/");
    return <></>;
  }

  return <div className="w-full text-2xl">{children}</div>;
};

export default AdminPanelLayou;
