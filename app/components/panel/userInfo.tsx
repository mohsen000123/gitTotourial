import { removeLoginToken } from "@/app/helpers/auth";
import useAuth from "@/app/hooks/useAuth";
import useRouter from "next/router";

const UserInfo = () => {
  const { user } = useAuth();

  const router = useRouter;

  const logoutHandler = async () => {
    await removeLoginToken();
    await router.push("/");
  };
  return (
    <>
      <span>User Name : {user?.name}</span>
      <br />
      <button
        onClick={logoutHandler}
        className="border-2 border-gray-500 px-3 py-2 rounded-md ml-9"
      >
        logout
      </button>
    </>
  );
};
export default UserInfo;
