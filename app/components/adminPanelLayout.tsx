import { ReactNode } from "react";
import { useRouter } from "next/router";

import useAuth from "../hooks/useAuth";
import SidebarLayout from "./admin/layout/sidebarLayout";
import SidebarMoblieLayout from "./admin/layout/sidebarMoblieLayout";

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
  // if (!user?.is_admin) {
  //   router.push("/");
  //   return <></>;
  // }

  return (
    <div className="w-full text-2xl">
      <div className="w-full h-full">
        <div className="flex flex-no-wrap">
          <SidebarLayout />
          <SidebarMoblieLayout />
          <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelLayou;
