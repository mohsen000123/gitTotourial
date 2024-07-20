import UserPanelLayout from "@/app/components/userPanelLayout";
import { NextPageWithLayout } from "../_app";

const Panel: NextPageWithLayout = () => {
  return (
    <>
      <h1>user dashboard </h1>
    </>
  );
};
Panel.getLayout = (page) => <UserPanelLayout>{page} </UserPanelLayout>;

export default Panel;
