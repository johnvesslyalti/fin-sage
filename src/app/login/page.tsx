'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-background text-foreground px-4">
      <Card className="w-full max-w-md shadow-xl border border-muted bg-card">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button
            onClick={() => signIn("google", { callbackUrl: "/dashboard"})}
            className="w-full flex items-center justify-center gap-2"
            variant="outline"
          >
            <FcGoogle className="text-xl" />
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
