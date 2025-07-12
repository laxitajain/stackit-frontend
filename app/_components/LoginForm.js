"use client";

import { useState } from "react";
import Button from "@/app/_components/Button";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!res.ok) throw new Error("Invalid credentials");
      const data = await res.json();

      localStorage.setItem("token", data.token);

      router.push("/");
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <>
      <div className="bg-secondary shadow-lg rounded-lg p-8 max-w-md w-full space-y-6">
        <h1 className="text-2xl font-bold text-[--primary]">
          Login to StackIt
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <Button type="submit" className="glossy-button w-full">
            Login
          </Button>
        </form>
      </div>
    </>
  );
}
