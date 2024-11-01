import Login from "@/components/layout/Login";
import Logout from "@/components/layout/Logout";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h3>Landing page</h3>
      {session ? (
        <div>
          <div>Your name is {session.user?.name}</div>
          <div>{session.user?.email}</div>
          <div>---------------</div>
          <div>
            <Logout />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
