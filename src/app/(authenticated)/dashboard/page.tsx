import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Box, Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <Box>
      <Typography variant="h4">Dashboard view</Typography>
      <Box>
        <div>
          <div>Your name is {session.user?.name}</div>
          <div>{session.user?.email}</div>
          <div>---------------</div>
          {/* dashboard content */}
        </div>
      </Box>
    </Box>
  );
}
