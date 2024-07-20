import { NextPageWithLayout } from "../_app";

import UserPanelLayout from "@/app/components/userPanelLayout";
import UserInfo from "@/app/components/panel/userInfo";

const Panel: NextPageWithLayout = () => {
  return (
    <>
      <h2>vhnauijvfcnbaiohndioka</h2>
      <UserInfo />
    </>
  );
};
Panel.getLayout = (page) => <UserPanelLayout>{page} </UserPanelLayout>;

export default Panel;
