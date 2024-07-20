import { Children, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminPanelLayout = ({ children }: Props) => {
  return <div className="w-full text-2xl">{children}</div>;
};

export default AdminPanelLayout;
