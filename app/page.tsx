import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Login from "./layout/Login";
import Logout from "./layout/Logout";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <div>
        <div>Your name is {session.user?.name}</div>
        <div>{session.user?.email}</div>
        <div>---------------</div>
        <div>
          <Logout />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Login />
    </div>
  );
}
