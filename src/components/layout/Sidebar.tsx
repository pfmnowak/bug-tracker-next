import { Drawer } from "@mui/material";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": {
          px: 2,
          py: 3,
          width: 280,
        },
      }}
    >
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/tasks">Tasks</Link>
      <LogoutButton />
    </Drawer>
  );
};

export default Sidebar;
