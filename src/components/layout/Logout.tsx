"use client";
import federatedLogout from "@/utils/federatedLogout";
import { Button } from "@mui/material";

export default function Logout() {
  return (
    <Button
      variant="contained"
      color="success"
      onClick={() => federatedLogout()}
    >
      Signout of keycloak
    </Button>
  );
}
