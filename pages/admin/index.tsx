import AdminPanelLayout from "@/app/components/adminPanelLayout";

import { NextPageWithLayout } from "../_app";
import { useEffect, useState } from "react";

const AdminPanel: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <h1>admin dashboard </h1>
    </>
  );
};
AdminPanel.getLayout = (page) => <AdminPanelLayout>{page} </AdminPanelLayout>;

export default AdminPanel;
