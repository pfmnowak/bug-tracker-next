"use client";
import { Button } from "@mui/material";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <Button
      variant="contained"
      color="success"
      onClick={() => signIn("keycloak")}
    >
      Signin with keycloak
    </Button>
  );
}
