import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginButton from "@/components/layout/LoginButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const signinErrors: Record<string | "default", string> = {};

interface SignInPageProp {
  params: object;
  searchParams: {
    callbackUrl: string;
    error: string;
  };
}

export default async function Signin({ searchParams }: SignInPageProp) {
  // Since Next 15 searchParams are async
  const { callbackUrl, error } = await searchParams;

  const session = await getServerSession(authOptions);
  if (session) {
    redirect(callbackUrl || "/");
  }
  return (
    <div>
      <h3>Our own custom login page</h3>
      {error && <div>{signinErrors[error.toLowerCase()]}</div>}
      <LoginButton />
    </div>
  );
}
