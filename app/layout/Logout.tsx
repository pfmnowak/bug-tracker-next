"use client";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

export default function Logout() {
  return (
    <Button variant="contained" color="success" onClick={() => signOut()}>
      Signout of keycloak
    </Button>
  );
}
