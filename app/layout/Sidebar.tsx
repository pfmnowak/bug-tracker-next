import { Drawer } from "@mui/material";
import Link from "next/link";

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
      <Link href="/">Home</Link>
      <Link href="/tasks">Tasks</Link>
    </Drawer>
  );
};

export default Sidebar;
