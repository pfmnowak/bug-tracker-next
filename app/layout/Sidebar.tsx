import { Box, Drawer } from "@mui/material";

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
      <Box>Drawer content</Box>
    </Drawer>
  );
};

export default Sidebar;
