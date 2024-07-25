import AdminPanelLayout from "@/app/components/adminPanelLayout";

import { NextPageWithLayout } from "../../_app";
import { useEffect, useState } from "react";

const UsersList: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <h1>user`s page </h1>
    </>
  );
};
UsersList.getLayout = (page) => (
  <AdminPanelLayout >{page} </AdminPanelLayout>
);

export default UsersList;
